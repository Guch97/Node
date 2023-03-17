const mysql = require('mysql2')

const db =  mysql.createPool({
   host:'127.0.0.1',
   user:'root',
   password:'Guch123456.',
   database:'myStudy',  //具体操作数据库
})

// 执行sql
const sqlStr = 'select * from users '
db.query(sqlStr,(err,results)=>{

})

// const users = {
//    password:'123',
//    name:'锁阳',
//    id:6
// }
// const insetStr = 'INSERT INTO users (password,name,id) values (?,?,?)'
// const insetStr = 'INSERT INTO users SET ?'
// db.query(insetStr, users, (err,results)=>{
//    if(results?.affectedRows===1){
//       console.log('成功>> ', '成功'); //xs
//    }
// })




// const users1 = {
//    password:'123',
//    name:'锁阳33333',
//    id:6
// }
// const insetStr = 'UPDATE USERS SET ? where id=?'

// db.query(insetStr, [users1,6], (err,results)=>{
//    if(results?.affectedRows===1){
//       console.log('成功>> ', '成功'); //xs
//    }
// })

const insetStr = 'DELETE FROM users where id=?'
db.query(insetStr,6,(err,data)=>{

})