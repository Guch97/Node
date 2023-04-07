/*
 * @Author: xs
 * @Date: 2023-04-06 15:07:53
 */
const path = require("path");
const { fileUploadError } = require("../constant/error.type");
class GoodsController {
  async upload(ctx, next) {
    const { file } = ctx.request.files;
    console.log("file :>> ", file); //xs
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
}

module.exports = new GoodsController();
