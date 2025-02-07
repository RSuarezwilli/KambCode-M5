import express from "express";
import fs from "fs/promises";

const app = express();
const port = 3002;

app.use(express.json());

const dbFile = "./archivo.json";

async function readDatabase() {
  const data = await fs.readFile(dbFile, "utf8").catch(async (err) => {
    if (err.code === "ENOENT") {
      await fs.writeFile(dbFile, "[]");
      return "[]";
    }
    throw err;
  });
  return JSON.parse(data || "[]");
}

async function writeDatabase(data) {
  await fs.writeFile(dbFile, JSON.stringify(data, null, 2));
}

const wrapAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

app.get("/students", wrapAsync(async (req, res) => {
  const students = await readDatabase();
  res.send({
    status: 200,
    message: "Students have been triaged",
    data: students,
  });
}));

app.get("/students/:id", wrapAsync(async (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const students = await readDatabase();

  if (isNaN(studentId)) {
    return res.status(400).json({ error: "ID de estudiante no válido" });
  }

  const student = students.find((s) => s.id === studentId);

  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ error: "Estudiante no encontrado" });
  }
}));

app.post("/students", wrapAsync(async (req, res) => {
  const { name, age, major } = req.body;
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "El nombre es obligatorio y debe ser una cadena no vacía" });
  }
  if (typeof age !== "number" || age < 0) {
    return res.status(400).json({ error: "La edad debe ser un número no negativo" });
  }
  if (!major || typeof major !== "string" || major.trim() === "") {
    return res.status(400).json({ error: "El campo major es obligatorio y debe ser una cadena no vacía" });
  }

  const students = await readDatabase();
  const newId = students.length ? students[students.length - 1].id + 1 : 1;
  const newStudent = { id: newId, name, age, major };

  students.push(newStudent);
  await writeDatabase(students);

  res.status(201).json(newStudent);
}));

app.put("/students/:id", wrapAsync(async (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const { name, age, major } = req.body;

  if (isNaN(studentId)) {
    return res.status(400).json({ error: "ID de estudiante no válido" });
  }

  const students = await readDatabase();
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  if (name !== undefined) {
    if (typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ error: "El nombre debe ser una cadena no vacía" });
    }
    student.name = name;
  }
  if (age !== undefined) {
    if (typeof age !== "number" || age < 0) {
      return res.status(400).json({ error: "La edad debe ser un número no negativo" });
    }
    student.age = age;
  }
  if (major !== undefined) {
    if (typeof major !== "string" || major.trim() === "") {
      return res.status(400).json({ error: "El campo major debe ser una cadena no vacía" });
    }
    student.major = major;
  }

  await writeDatabase(students);
  res.status(200).json(student);
}));

app.delete("/students/:id", wrapAsync(async (req, res) => {
  const studentId = parseInt(req.params.id, 10);

  if (isNaN(studentId)) {
    return res.status(400).json({ error: "ID de estudiante no válido" });
  }

  const students = await readDatabase();
  const studentIndex = students.findIndex((s) => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  const deletedStudent = students.splice(studentIndex, 1);
  await writeDatabase(students);

  res.status(200).json(deletedStudent);
}));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Error del servidor" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
