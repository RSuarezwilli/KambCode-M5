
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
    if (!authHeader) {
      return res.status(403).json({ error: 'No token provided' });
    }
  
    const token = authHeader.split(' ')[1]; 
  
    if (token !== 'mysecrettoken') {
      return res.status(403).json({ error: 'Invalid token' });
    }
  
    next(); 
  };
  
  export default authMiddleware;
  