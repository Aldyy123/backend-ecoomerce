const { Product, Category, User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt')

class Controller {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const user = await User.create({ username, email, password, role: "Admin", phoneNumber, address })

      res.status(201).json({ message: `Admin ${user.username} with email ${user.email} has been created` })

    } catch (error) {
      if (error.original.code === '23502') {
        throw res.status(400).json({ message: `Username is empty` });
      }
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body
      if(!email) throw {name: "unauthorize", message: "invalid input email or password" }
      let findUser = await User.findOne({ where: { email }, attributes: { include: ['password'] } });
      if (!findUser) {
        throw { name: "unauthorize", message: "User not found" };
      }
      const passwordValidation = comparePassword(password, findUser.password)
      if (!passwordValidation) {
        throw { name: "unauthorize", message: "invalid validate input email or password" };
      }
      const payload = {
        id: findUser.id,
        role: findUser.role
      };
      const access_token = createToken(payload);

      return res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Controller