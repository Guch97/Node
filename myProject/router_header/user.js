const db = require('../db/index')
exports.reguser = (req,res)=>{
   const userInfo = req.body
   // 定义sql语句
   const str = 'select * from ev_users where userName=?'
   db.query(str,userInfo.userName,(err,result)=>{
      if(err){
         return res.cc(err)
      }
      if(result.length>0){
         return res.cc('已被占用用户名')
      }
      const insertIntoStr = 'insert into ev_users set?'
      db.query(insertIntoStr,{userName:userInfo.userName,password:userInfo.password},(err,result)=>{
         if(err){
            return res.cc('插入失败')
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
   const useInfo = req.body
   const selectStr = 'select * from en_users where userName = ?'
   db.query(selectStr,(err,result)=>{
      if(err) return res.cc(err)
      if(result.length!==1){
         res.cc('无相关用户,登陆失败')
      }else{
         res.send({
            status:200,
            message:'登陆成功'
         })
      }
   })
}