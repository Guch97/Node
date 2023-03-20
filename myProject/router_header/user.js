exports.reguser = (req,res)=>{
   res.send({
      status:200,
      message:'注册成功'
   })
}

exports.login = (req,res)=>{
   res.send({
      status:200,
      message:'登陆成功'
   })
}