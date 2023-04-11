/*
 * @Author: xs
 * @Date: 2023-04-06 15:07:53
 */
const path = require("path");
const { fileUploadError } = require("../constant/error.type");
class GoodsController {
  async upload(ctx) {
    const { file } = ctx.request.files;
    if (file) {
      ctx.body = {
        code: "0",
        message: "商品图片上传成功",
        result: {
          img: path.basename(file.path),
        },
      };
    } else {
      ctx.app.emit("error", fileUploadError, ctx);
    }
  }
  async create(ctx) {
    // 直接调用service
    await createGoods(ctx.request.body);
  }
}

module.exports = new GoodsController();
