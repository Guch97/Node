/*
 * @Author: xs
 * @Date: 2023-03-30 10:58:05
 */
const User = require('../model/use.model')
class UserService {
   async createUser (user_name, pass_word) {
      // 写入数据库
      try {
         const res = await User.create({ user_name, pass_word })
         return res
      } catch (error) {
         console.log('error :>> ', error); //xs
      }
   }
   async getUserInfo ({ id, user_name, pass_word, is_admin }) {
      const whereOpt = {}
      id && { ...whereOpt, id }
      user_name && { ...whereOpt, user_name }
      pass_word && { ...whereOpt, pass_word }
      is_admin && { ...whereOpt, is_admin }
      const res = await User.findOne({
         attributes: ['id', 'user_name', 'pass_word', 'is_admin'],
         where: whereOpt
      })
      return res ? res.dataValues : null
   }
}

module.exports = new UserService()