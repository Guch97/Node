const express = require('express')
const app = express()


const secretKey = 'time1'
const { expressjwt } = require("express-jwt");
// 生成
const jwt = require('jsonwebtoken')
// 解析
app.use(expressjwt({ secret: secretKey,algorithms:['HS256'] }).unless({path:[/^\/api\//]}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.post('/api/login', (req, res) => {
   const userInfo = req.body
   res.send({
      message:'登陆成功',
      status: 200,
      token: jwt.sign({ userName: userInfo.userName }, secretKey, { expiresIn: 30 })
   })
})

app.get('/api/info',(req,res)=>{
   console.log('req :>> ', req.auth); //xs
   res.send({
      status:200,
      data:req.user
   })
})

app.listen('3001',()=>{

})