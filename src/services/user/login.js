const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../schema/user/user");

const loginUser = async (data) => {
  const user = await User.findOne({ email: data.email }).select("+password");
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return { user, token };
};

module.exports = loginUser;
