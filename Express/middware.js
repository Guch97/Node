const express  = require('express')
var bodyParser = require('body-parser')
const app = express()


const mw = (req,res,next)=>{
   const time =  Date.now()
   req.time = time
   next()
}
const mw1 = (req,res,next)=>{
   const time =  Date.now()
   req.time = time
   next()
}

const mw3 = (req,res,next)=>{
   const time =  Date.now()
   req.time = time
   next()
}
// 全局中间件
app.use(mw)

// app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// 局部生效的中间件
// app.get('/',[mw1,mw3],(req,res)=>{
//    console.log('req :>> ', req.time); //xs
//    res.send('home')
// })
app.get('/user',(req,res)=>{
   res.send('home')
})


app.post('/list',(req,response)=>{
   console.log(1,req.body);
   response.send('post')
})
app.listen('3000',()=>{
   console.log('启动成功1' >> ', 启动成功'); //xs
})
