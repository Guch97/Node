class UserService {
   async createUser (userName, passWord) {
      // 写入数据库
      return '写入数据库成功'
   }
}

module.exports = new UserService()