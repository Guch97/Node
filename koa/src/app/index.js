/*
 * @Author: xs
 * @Date: 2023-03-30 10:00:01
 */
const Koa = require("koa");
const path = require("path");
// koa-body 是一个可以帮助解析 http 中 body 的部分的中间件，包括 json、表单、文本、文件等。
const { koaBody } = require("koa-body");
const errorHandle = require("./errorHandle");
const parameter = require("koa-parameter");
// const userRouter = require("../router/userRoute");
const router = require("../router/index");

const app = new Koa();
// 统一参数验证
app.use(parameter(app));
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
// app.use(userRouter.routes());

// 图片格式
app.use(
  koaBody({
    multipart: false,
    formidable: {
      //  在配置选项不推荐使用相当路径
      // options 不是相对当前文件， 相当的process 相当进程
      uploadDir: path.join(__dirname, "../upload"),
      // 是否保留文件扩展名
      keepExtensions: true,
    },
  })
);
//统计进行错误处理
app.on("error", errorHandle);

module.exports = app;
