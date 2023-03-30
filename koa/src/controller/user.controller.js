const { createUser } = require('../service/user.service')
class UserController {
   async register (ctx, next) {
      console.log('ctx.request.body :>> ', ctx.request.body); //xs
      // 操作数据库
      const { userName, passWord } = ctx.request.body
      const res = await createUser(userName, passWord)
      console.log('res :>> ', res); //xs
      // 返回
      ctx.body = ctx.request.body
   }
   async login (ctx, next) {
      ctx.body = '登陆成功'
   }
}


module.exports = new UserController()