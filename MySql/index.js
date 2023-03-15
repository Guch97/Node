const mysql = require('mysql2')

const db =  mysql.createPool({
   host:'127.0.0.1',
   user:'root',
   password:'Guch123456.',
   database:'myStudy',  //具体操作数据库
})

// 执行sql
db.query('SELECT 1',(err,results)=>{
   console.log('err :>> ', err); //xs
   console.log('results :>> ', results); //xs
})