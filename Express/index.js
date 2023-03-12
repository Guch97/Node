const express = require('express')
const router = express.Router()
const app = express()

app.use('public', express.static('./index.js'))

router.get('/user/list',(req,res)=>{
   res.send({name:'list'})
})

router.post('/user/list',(req,res)=>{
   res.send({name:'李四'})
})

module.exports = {
   router
}