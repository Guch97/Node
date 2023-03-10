const http = require('http')
// 创建
const server = http.createServer()

server.on('request',(req,res)=>{
   console.log('some one visis :>> '); //xs
   const url = req.url
   const method = req.method
   // res.setHeader('Content-Type', 'text/html;  charset=uft-8')
   res.setHeader('Content-Type','text/plain;charset=utf-8');
   res.end('的怂啊都送啊')
})

server.listen(3343,function(){
   console.log('11111 :>> ', 11111); //xs
})