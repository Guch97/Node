/*
 * @Author: xs
 * @Date: 2023-04-05 18:19:56
 */
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/default");
const {
  tokenExpiredError,
  invalidTokenError,
} = require("../constant/error.type");
const auth = async (ctx, next) => {
  const { authorization } = ctx.request.header;
  const token = authorization.split(" ")[1];
  try {
    //   包含playload信息
    const user = jwt.verify(token, JWT_SECRET);
    ctx.state.user = user;
  } catch (error) {
    console.log("error :>> ", error); //xs
    switch (error.name) {
      case "TokenExpiredError":
        return ctx.app.emit("error", tokenExpiredError, ctx);
      case "JsonWebTokenError":
        return ctx.app.emit("error", invalidTokenError, ctx);

      default:
        break;
    }
  }
  await next();
};

module.exports = {
  auth,
};
