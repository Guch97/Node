/*
 * @Author: xs
 * @Date: 2023-03-31 10:52:17
 */
const bcrypt = require('bcryptjs');
const { getUserInfo } = require("../service/user.service");
const { useFormateError, useAlreadyExited } = require("../constant/error.type");
const { registerError } = require("../constant/error.type");

const userValidator = async (ctx, next) => {
  const { userName, passWord } = ctx.request.body;
  // 合法性 合理
  if (!userName || !passWord) {
    ctx.app.emit("error", useFormateError, ctx);
    return;
  }
  await next();
};

const verifyUser = async (ctx, next) => {
  const { userName } = ctx.request.body;
  try {
    const res = await getUserInfo({ user_name: userName });
    if (res) {
      console.error("用户名已存在");
      ctx.app.emit("error", useAlreadyExited, ctx);
      return;
    }
    await next()
  } catch (error) {
    ctx.app.emit("error", registerError, ctx);
  }
};

const bcryptjsPassword = async (ctx, next) => {
  const { passWord } = ctx.request.body
  var salt = bcrypt.genSaltSync(10);
  // 保存密文
  var hash = bcrypt.hashSync(passWord, salt);
  ctx.request.body.passWord = hash
  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  bcryptjsPassword
};
