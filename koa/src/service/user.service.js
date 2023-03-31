const User = require('../model/use.model')
class UserService {
   async createUser (user_name, pass_word) {
      // 写入数据库
      try {
         const res = await User.create({ user_name, pass_word })
         console.log('res321321 :>> ', res); //xs
         return res
      } catch (error) {
         console.log('error :>> ', error); //xs
      }
   }
}

module.exports = new UserService()