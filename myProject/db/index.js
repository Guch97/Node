const mysql = require('mysql2')

const db = mysql.createPool({
   host:'127.0.0.1',
   use:'root',
   password:'Guch123456.',
   database:'myStudy',  //具体操作数据库
})


module.exports = db