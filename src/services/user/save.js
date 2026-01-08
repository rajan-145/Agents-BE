const bcrypt = require("bcryptjs");
const User = require("../../schema/user/user");

const registerUser = async (data) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return user;
};

module.exports = registerUser;
