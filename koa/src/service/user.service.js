/*
 * @Author: xs
 * @Date: 2023-03-30 10:58:05
 */
const User = require("../model/use.model");
class UserService {
  async createUser(user_name, pass_word) {
    // 写入数据库
    try {
      const res = await User.create({ user_name, pass_word });
      return res.dataValues;
    } catch (error) {
      console.log("error :>> ", error); //xs
    }
  }
  async getUserInfo({ id, user_name, pass_word, is_admin }) {
    let whereOpt = {};
    whereOpt = id && { ...whereOpt, id };
    whereOpt = pass_word && { ...whereOpt, pass_word };
    whereOpt = is_admin && { ...whereOpt, is_admin };
    whereOpt = user_name && { ...whereOpt, user_name };
    const res = await User.findOne({
      attributes: ["id", "user_name", "pass_word", "is_admin"],
      where: whereOpt,
    });
    return res ? res.dataValues : null;
  }
  async updatePassWord({ id, pass_word, user_name, is_admin }) {
    let whereOpt = { id };
    let newUser = {};
    user_name && Object.assign(newUser, { user_name });
    is_admin && Object.assign(newUser, { is_admin });
    pass_word && Object.assign(newUser, { pass_word });

    console.log("newUser :>> ", newUser); //xs
    const res = await User.update(newUser, {
      where: whereOpt,
    });
    console.log(res, "22222");
    return res && res[0] === 1;
  }
}

module.exports = new UserService();
