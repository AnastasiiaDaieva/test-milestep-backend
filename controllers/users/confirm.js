const { User } = require("../../models/user");
const CreateError = require("http-errors");

const confirm = async (req, res, next) => {
  try {
    const { confirmationToken } = req.params;
    const user = await User.findOne({ confirmationToken });
    if (!user) {
      throw CreateError(404);
    }

    await User.findByIdAndUpdate(user._id, {
      confirmedAt: true,
      confirmationToken: "",
    });
    res.json({ message: "Successful verification" });
  } catch (error) {
    next(error);
  }
};

module.exports = confirm;
