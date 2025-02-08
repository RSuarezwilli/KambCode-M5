import express from 'express';
import { createStudent, deleteStudent, getStudentById, getStudents, helloWorld, updateStudent } from './funciones/index.js';
import { logsMiddleware, validateBody } from './middlewares/index.js';
import { createRegister, login } from './funciones/register.js';
import { readFile } from 'fs/promises';

const app = express();

app.use(express.json());
app.use(logsMiddleware);

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  let users = await readFile('./archivo.json');
  users = JSON.parse(users);

  const isValidUser = users.find(user => user.tokens.includes(token));
  if (!isValidUser) return res.status(401).json({ message: 'Unauthorized' });

  next();
};

app.get('/', helloWorld);
app.get('/students', isAuth, getStudents);
app.get('/students/:id', getStudentById);
app.post('/students', validateBody, createStudent);
app.put('/students/:id', updateStudent);
app.delete('/students/:id', deleteStudent);

app.post('/register', createRegister);
app.post('/login', login);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
