const db = require('../db/index')

exports.reguser = (req,res)=>{
   const userInfo = req.body
   if(!userInfo.userName||!userInfo.password){
      return res.send({status:1,message:'用户名密码不正确'})
   }
   // 定义sql语句
   const str = 'select * from ev_users where userName=?'
console.log('userInfo :>> ', userInfo); //xs
   db.query(str,userInfo.userName,(err,result)=>{
      console.log('err :>> ', err); //xs
      if(err){
         return res.send({message:'发生未知错误',status:1})
      }
      if(result.length>0){
         return res.send({message:'已被占用用户名',status:1})
      }
      const insertIntoStr = 'insert into ev_users set?'
      db.query(insertIntoStr,{userName:userInfo.userName,password:userInfo.password},(err,result)=>{
         if(err){
            res.send({
               status:1,
               message:'插入失败'
            })
         }else{
            res.send({
               status:200,
               message:'注册成功'
            })
         }
      })
   })
}

exports.login = (req,res)=>{
   res.send({
      status:200,
      message:'登陆成功'
   })
}