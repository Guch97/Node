const express = require('express')
const app = express()
const session = require('express-session')


app.use(session({
   secret:'dad',
   resave:false,
   saveUninitialized:true
}))

app.listen('3001',()=>{
   console.log(' 启动成功:>> ', ); //xs
})


app.post('/login/user',(req,res)=>{
   req.session.user = req.body
   req.session.isLogin = true
   res.send('登陆成功')
})

app.get('/username',(req,res)=>{
   res.send(req.session.user)
})

app.post('/api/logout',(req,res)=>{
   req.session.destroy()
   res.send({
      status:0,
      success:'退出成功'
   })
})


