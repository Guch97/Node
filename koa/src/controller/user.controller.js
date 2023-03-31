const { createUser } = require('../service/user.service')
class UserController {
   async register (ctx, next) {
      // 操作数据库
      const { userName, passWord } = ctx.request.body
      try {
         const { dataValues } = await createUser(userName, passWord)
         ctx.body = {
            code: 0,
            message: '注册成功',
            result: {
               id: dataValues.id,
               user_name: dataValues.user_name
            }
         }
      } catch (error) {
         console.log('error :>> ', error); //xs
      }
   }
   async login (ctx, next) {
      ctx.body = '登陆成功'
   }
}


module.exports = new UserController()