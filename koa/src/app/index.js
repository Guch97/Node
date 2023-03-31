/*
 * @Author: xs
 * @Date: 2023-03-30 10:00:01
 */
const Koa = require('koa')
const { koaBody } = require('koa-body');
const errorHandle = require('./errorHandle')
const userRouter = require('../router/userRoute')

const app = new Koa()


app.use(koaBody())
app.use(userRouter.routes())

//统计进行错误处理
app.on('error', errorHandle)

module.exports = app
