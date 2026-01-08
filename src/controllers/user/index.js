const registerSchema = require("../../api/user/save");
const loginSchema = require("../../api/user/login");

const registerUser = require("../../services/user/save");
const loginUser = require("../../services/user/login");

const register = async (req, res, next) => {
  try {
    await registerSchema.validateAsync(req.body);
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { id: user._id, email: user.email },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
    const result = await loginUser(req.body);

    res.status(200).json({
      success: true,
      token: result.token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
