/*
 * @Author: xs
 * @Date: 2023-04-06 15:10:27
 */
const KoaRouter = require("koa-router");
const { upload } = require("../controller/goods");

const router = new KoaRouter({ prefix: "/goods" });

router.post("/upload", upload);

module.exports = router;
