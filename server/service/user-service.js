const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user_dto");

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

    const userDto = new UserDto(user); // fields: id, email, isActivated
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
