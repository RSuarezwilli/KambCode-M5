export const helloWorld = (req, res) => {
    res.send('Hello, welcome to the student API!');
  };
  
  export const getStudents = (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]);
  };
  
  export const getStudentById = (req, res) => {
    const { id } = req.params;
    res.json({ id, name: `Student ${id}` });
  };
  
  export const createStudent = (req, res) => {
    const student = req.body;
    res.status(201).json({ message: 'Student added', student });
  };
  
  export const updateStudent = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Student ${id} updated` });
  };