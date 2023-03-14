const express = require('express')
const app = express()
const router =  require('./router')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', router)

app.listen('3000',()=>{

})