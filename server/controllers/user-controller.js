const userService = require("../service/user-service");

class UserController {
  async registration(req, res, next) {
    try {
      // get email and password from response
      const { email, password } = req.body;
      // get tokens
      const userData = await userService.registration(email, password);
      // save refresh token in cookie
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res, next) {
    try {
    } catch (e) {}
  }

  async logout(req, res, next) {
    try {
    } catch (e) {}
  }

  async activate(req, res, next) {
    try {
    } catch (e) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json(["123", "456"]);
    } catch (e) {}
  }
}

module.exports = new UserController();
