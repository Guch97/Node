
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use((req, res, next) => {
  res.cc = function (error, status = 1) {
    res.send({
      status,
      message: error instanceof Error ? error.message : error
    })
  }
  next()
})
app.use((err, req, res, next) => {
  if (err instanceof Joi.ValidationError) return res.cc(err)
  // 未知错误
  res.cc(err)
})
const useRouter = require('./router')
const Joi = require('@hapi/joi')
app.use('/api', useRouter)

app.listen(3000, () => {
  console.log('>>>服务器启动了');
})