const express = require('express')
const apiRouter = express.Router()



apiRouter.get('/user',(req,res)=>{
   const query = req.query
   res.send({
      status:200,
      message:'请求成功',
      data:query
   })
})

apiRouter.post('/list',(request,res)=>{
   const query = request.body
   res.send({
      status:200,
      message:'请求成功',
      data:query
   })
})

module.exports  = apiRouter
