const CreateError = require("http-errors");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();
const { SECRET_KEY } = process.env;

const { User } = require("../models/user");

const authenticate = async (req, res, next) => {
  // try {
  //   const { authorization } = req.headers;
  //   console.log(authorization);
  //   const [bearer, token] = authorization.split(" ");
  //   if (bearer !== "Bearer") {
  //     throw new CreateError(401, "Not authorized");
  //   }
  //   const { id } = jwt.verify(token, SECRET_KEY);
  //   const user = await User.findById(id);
  //   console.log("current", user);
  //   if (!user || !user.token) {
  //     throw new CreateError(401, "Not authorized");
  //   }
  //   req.user = user;
  //   next();
  // } catch (error) {
  //   if (!error.status) {
  //     error.status = 401;
  //     error.message = "Not authorized";
  //   }
  //   next(error);
  // }
};

module.exports = authenticate;
