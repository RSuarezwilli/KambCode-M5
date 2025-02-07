import { readFile, writeFile } from 'fs/promises';

let students = [];

async function loadStudents() {
  try {
    const data = await readFile('./archivo.json', 'utf8');
    students = JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    students = [];
  }
}

await loadStudents();
console.log(students);

export const helloWordFunction = (req, res) => {
  res.send('Hello World');
};

export const getstudentsFunction = async (req, res) => {
  res.send({
    status: 200,
    message: 'Students retrieved successfully',
    data: students
  });
};

export const getstudentsBylFunction = (req, res) => {
  const { id } = req.params;
  const selectedStudent = students.find((student) => student.studentid === parseInt(id));
  if (!selectedStudent) {
    return res.status(404).send({
      status: 404,
      message: 'Student not found',
    });
  }
  res.send({
    status: 200,
    message: 'Student retrieved successfully',
    data: selectedStudent
  });
};

export const createStudentFunction = async (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  await writeFile('./archivo.json', JSON.stringify(students));
  res.send({
    status: 201,
    message: 'Student created successfully',
    data: newStudent
  });
};

export const updateasatudentsFunction = async (req, res) => {
  const { id } = req.params;
  const selectedStudentIndex = students.findIndex((student) => student.studentid === parseInt(id));
  if (selectedStudentIndex === -1) {
    return res.status(404).send({
      status: 404,
      message: 'Student not found',
    });
  }
  const updatedStudent = req.body;
  students[selectedStudentIndex] = { ...students[selectedStudentIndex], ...updatedStudent };
  await writeFile('./archivo.json', JSON.stringify(students));
  res.send({
    status: 200,
    message: 'Student updated successfully',
    data: students[selectedStudentIndex]
  });
};

export const deleteStudentFuction = async (req, res) => {
  const { id } = req.params;
  const selectedStudentIndex = students.findIndex((student) => student.studentid === parseInt(id));
  if (selectedStudentIndex === -1) {
    return res.status(404).send({
      status: 404,
      message: 'Student not found',
    });
  }
  const deletedStudent = students.splice(selectedStudentIndex, 1);
  await writeFile('./archivo.json', JSON.stringify(students));
  res.send({
    status: 200,
    message: 'Student deleted successfully',
    data: deletedStudent
  });
};