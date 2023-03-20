
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const useRouter = require('./router')
app.use('/api',useRouter)

 app.listen(3000,()=>{
   console.log('>>>服务器启动了');
 })