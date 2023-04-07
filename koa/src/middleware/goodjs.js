/*
 * @Author: xs
 * @Date: 2023-04-07 14:59:09
 */
const validator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_name: { type: "string", require: true },
      goods_pcie: { type: "number", require: true },
    });
  } catch (error) {
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};

module.exports = {
  validator,
};
