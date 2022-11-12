const AuthService = require("../services/auth.services");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await AuthService.login(email, password);
    const userData = {
      email: data.result.email,
      username: data.result.username,
      id: data.result.id,
    };
    const token = jwt.sign(userData, "1234", { algorithm: "HS512" });
    userData.token = token;
    res.status(201).json(userData);
  } catch (error) {
    next({
      message: "La cagaste, bro",
      status: 401,
      errorContent: error,
    });
  }
};

module.exports = userLogin;
