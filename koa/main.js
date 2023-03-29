const Koa = require('koa')

const { APP_PORT } = require('./src/config/default')
const app = new Koa()
const userRouter = require('./src/router/userRoute')





app.use(userRouter.routes())


app.listen(APP_PORT, () => {
   console.log(' 服务启动:>>', APP_PORT); //xs
})