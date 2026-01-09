const User = require("../../schema/user/user");

const listUser = async (data) => {
  try {
    const userList = await User.find({});
    if (userList?.length == 0) {
      throw new Error("Invalid credentials");
    }
    return { data: userList };
  } catch (error) {
    console.error("error =listUser===>", error);

    throw new Error(error?.message);
  }
};

module.exports = listUser;
