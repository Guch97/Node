/*
 * @Author: xs
 * @Date: 2023-04-06 16:18:52
 */
const fs = require("fs");
const KoaRouter = require("koa-router");
const router = new KoaRouter();

fs.readdirSync(__dirname).forEach((file) => {
  console.log(file, "file");
  if (file !== "index.js") {
    const r = require("./" + file);
    //app.use(userRouter.routes());
    router.use(r.routes());
  }
});

module.exports = router;
