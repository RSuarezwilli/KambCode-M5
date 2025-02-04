import http from 'http';
import handleRequest from './routers/routers.js';

const server = http.createServer((req, res) =>{
    handleRequest(req,res)
})

server.listen(3002,() =>{
    console.log('Server is running on port 3000')
})