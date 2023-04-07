/*
 * @Author: xs
 * @Date: 2023-03-29 21:24:22
 */
const KoaRouter = require("koa-router");

const {
  userValidator,
  verifyUser,
  bcryptjsPassword,
  verifyLogin,
} = require("../middleware/user.middleware");
const { auth } = require("../middleware/auth");
const router = new KoaRouter({ prefix: "/users" });

const {
  register,
  login,
  changePassWord,
} = require("../controller/user.controller");

// 注册接口
router.post("/register", userValidator, verifyUser, bcryptjsPassword, register);
router.post("/login", userValidator, verifyLogin, login);
router.patch("/updateUser", auth, changePassWord);

module.exports = router;
