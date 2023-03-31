const { DataTypes } = require('sequelize')
const sequelize = require('../db/seq')

// 创建模型
const User = sequelize.define('zd_user', {
   // id 会被自动创建
   user_name: {
      type: DataTypes.STRING,
      // 是否允许为空
      allowNull: false,
      // 是否唯一
      unique: true,
      // 注释
      comment: '用户名 唯一',
   },
   pass_word: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: '密码',
   },
   is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
      comment: '是否管理员 0否 1是',
   }
}, {
   timestamps: false
})
// 创建表
// User.sync({ force: true })
module.exports = User