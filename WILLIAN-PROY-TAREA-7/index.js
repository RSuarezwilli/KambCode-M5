import express from "express"

const app = express();
const port = 3002;

// app.use(express.json())

const students = [
  { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
  { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
  { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];


app.get('/students', (req, res) => {
 // res.status(200).json(students);
  res.send({
     status: 200,
    message:'students have been triaged',
     data: students,

  });
});


app.get('/students/:id', (req, res) => {
  const studentid = parseInt(req.params.id, 10);

  if (isNaN(studentid)) {
    return res.status(400).json({ error: 'ID de estudiante no válido' });
  }

  const student = students.find(s => s.id === studentId);

  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ error: 'Estudiante no encontrado' });
  }
});


app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error del servidor' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });
    