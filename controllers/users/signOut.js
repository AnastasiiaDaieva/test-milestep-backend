const { User } = require("../../models/user");

const signOut = async (req, res, next) => {
  try {
    const { _id, username } = req.user;
    await User.findByIdAndUpdate(_id, { token: "" });
    res.json({
      code: "204",
      message: `User ${username}' was succesfully signed out`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signOut;
