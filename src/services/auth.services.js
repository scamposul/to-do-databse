const Users = require("../models/users.models");
const bycript = require("bcrypt");

class AuthService {
  static async login(email, password) {
    try {
      const result = await Users.findOne({
        where: { email },
      });
      const isValid = bycript.compareSync(password, result.password);
      return { isValid, result };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;
