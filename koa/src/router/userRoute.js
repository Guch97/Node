const KoaRouter = require('koa-router')

const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/', (ctx, next) => {
   ctx.body = 'hello users'
})

module.exports = userRouter
