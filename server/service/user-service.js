const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      throw new Error(`User with email ${email} already exist.`);
    }
    // Hash the password
    const hashPassword = await bcrypt.hash(password, 3);
    // Generate the random string as activation link
    const activationLink = uuid.v4;
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    // Send activation message to email
    await mailService.sendActivationMail(email, activationLink);
  }
}

module.exports = new UserService();
