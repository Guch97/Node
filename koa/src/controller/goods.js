/*
 * @Author: xs
 * @Date: 2023-04-06 15:07:53
 */
class GoodsController {
  async upload(ctx, next) {
    ctx.body = "商品图片上传成功";
  }
}

module.exports = new GoodsController();
