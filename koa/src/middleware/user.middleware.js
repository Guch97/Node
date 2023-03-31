/*
 * @Author: xs
 * @Date: 2023-03-31 10:52:17
 */
/*
 * @Author: xs
 * @Date: 2023-03-31 10:52:17
 */
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
    const res = await getUserInfo(userName);
    if (res) {
      console.error("用户名已存在");
      ctx.app.emit("error", useAlreadyExited, ctx);
      return;
    }
  } catch (error) {
    ctx.app.emit("error", registerError, ctx);
  }
};

module.exports = {
  userValidator,
  verifyUser,
};
