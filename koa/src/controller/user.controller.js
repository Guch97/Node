/*
 * @Author: xs
 * @Date: 2023-03-31 10:53:07
 */
const { createUser, getUserInfo } = require("../service/user.service");
const { registerError } = require("../constant/error.type");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/default");
class UserController {
  async register(ctx, next) {
    // 操作数据库
    const { userName, passWord } = ctx.request.body;
    try {
      const res = await createUser(userName, passWord);
      ctx.body = {
        code: 0,
        message: "注册成功",
        result: {
          id: res.id,
          user_name: res.user_name,
        },
      };
    } catch (error) {
      ctx.app.emit("error", registerError, ctx);
    }
  }
  async login(ctx, next) {
    const { userName, passWord } = ctx.request.body;
    ctx.body = "登陆成功";
    // 获取用户信息
    try {
      // 返回结果,剔除password
      const { passWord, ...res } = await getUserInfo({
        user_name: userName,
      });
      ctx.body = {
        code: 0,
        message: "登陆成功",
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: "1d" }),
        },
      };
    } catch {}
  }
}

module.exports = new UserController();
