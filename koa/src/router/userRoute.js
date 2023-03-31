/*
 * @Author: xs
 * @Date: 2023-03-29 21:24:22
 */
const KoaRouter = require('koa-router')

const { userValidator, verifyUser } = require('../middleware/user.middleware')
const router = new KoaRouter({ prefix: '/users' })

const { register, login } = require('../controller/user.controller')


// 注册接口
router.post('/register', userValidator, verifyUser, register)
router.post('/login', login)


module.exports = router
