const { Sequelize } = require('sequelize');
const { MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('../config/default')

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
   host: MYSQL_HOST,
   dialect: 'mysql'/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
});

// sequelize.authenticate().then(() => {
//    console.log('数据库连接成功')
// }).catch((err) => {
//    console.log('数据库连接失败', err)
// })

module.exports = sequelize