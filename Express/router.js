const express = require('express')
const app = express()
const { router } =  require('./index')

app.use('/api', router)

app.listen('3004',()=>{
   console.log('启动成功1' >> ', 启动成功'); //xs
})
