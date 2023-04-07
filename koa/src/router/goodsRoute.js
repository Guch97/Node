/*
 * @Author: xs
 * @Date: 2023-04-06 15:10:27
 */
const KoaRouter = require("koa-router");
const { upload } = require("../controller/goods");
const { auth, handPermission } = require("../middleware/auth");
const { validator } = require('../middleware/goodjs')}

const router = new KoaRouter({ prefix: "/goods" });

router.post("/upload", auth, handPermission, upload);
router.post("/publish", auth, handPermission, validator, (ctx, next) => {
   ctx.body = '发布成功'
});


module.exports = router;
