const Joi = require("joi");
const { User, schemas } = require("../../models/user");
const CreateError = require("http-errors");
const { confirmEmail } = require("../../helpers");

const resendConfirmation = async (req, res, next) => {
  try {
    const { error } = schemas.verify.validate(req.body);
    if (error) {
      throw new CreateError(400, "Email was not provided");
    }
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user.confirmedAt) {
      throw CreateError(400, "Email is already confirmed");
    }
    const mail = {
      to: email,
      subject: "Confirm your email",
      html: `<a target="_blank" rel="noreferrer noopener" href='http://localhost:4000/users/${user.confirmationToken}'>Click to verify your email </a>`,
    };
    confirmEmail(mail);
    res.json({ message: "Email sent" });
  } catch (error) {
    next(error);
  }
};

module.exports = resendConfirmation;
