const Joi = require("joi");
const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    username: {
      type: String,

      unique: true,
      minlength: 1,
    },
    token: {
      type: String,
      default: "",
    },
    confirmedAt: {
      type: Boolean,
      default: false,
    },
    // confirmationToken: {
    //   type: String,
    //   required: [true, "Confirmation token is required"],
    // },
  },
  { versionKey: false, timestamps: true }
);

const registerJoiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  username: Joi.string().min(1),
  token: Joi.string(),
});

const confirmEmailSchema = Joi.object({
  email: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  schemas: {
    register: registerJoiSchema,
    verify: confirmEmailSchema,
  },
};
