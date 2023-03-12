const express = require('express')

const app = express()

app.listen('3004',()=>{
   console.log('启动成功1' >> ', 启动成功'); //xs
})

app.get('/user',(req,res)=>{
   res.send({name:'4444'})
})

app.post('/user',(req,res)=>{
   res.send({name:'李四'})
})


app.use('public',express.static('./index.js'))