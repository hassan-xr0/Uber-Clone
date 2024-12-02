const http =require('http');
const app = require('./app');
const port = process.env.port

const server = http.createServer(app)

server.listen(port,()=>console.log(`server is runing on port : ${port}`))

