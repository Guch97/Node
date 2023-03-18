const express = require('express')
const app = express()



// 生成
const jwt = require('jsonwebtoken')
// 解析
const expressJWtT = require('express-jwt')
app.use(expressJWtT({ secret: secretKey }).unless({path:[/^\/api\//]}))


const secretKey = 'time1'

app.post('/api/login', (req, res) => {
   const userInfo = req.body
   res.send({
      status: 200,
      token: jwt.sign({ userName: userInfo.userName }, secretKey, { expiresIn: 30 })
   })
})