/*
 * @Author: xs
 * @Date: 2023-03-31 10:53:07
 */
const {
  createUser,
  getUserInfo,
  updatePassWord,
} = require("../service/user.service");
const { registerError } = require("../constant/error.type");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/default");
class UserController {
  async register(ctx, next) {
    // 操作数据库
    const { userName, passWord, isAdmin } = ctx.request.body;
    try {
      const res = await createUser(userName, passWord, isAdmin);
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
  async changePassWord(ctx, next) {
    const { id } = ctx.state.user;
    console.log(id);
    const passWord = ctx.request.body.passWord;
    console.log(passWord);

    const res = await updatePassWord({ id, pass_word: passWord });
    if (res) {
      ctx.body = {
        code: 0,
        message: "修改密码成功",
        result: "",
      };
    } else {
      ctx.body = {
        code: "10007",
        message: "修改密码失败",
        result: "",
      };
    }
    console.log(res, "res");
    try {
    } catch (error) {}
  }
}

module.exports = new UserController();
