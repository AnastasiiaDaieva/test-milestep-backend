const { Task, schemas } = require("../../models/task");
const CreateError = require("http-errors");

const createTask = async (req, res, next) => {
  try {
    const { error } = schemas.add.validate(req.body);
    if (error) {
      throw new CreateError(400, error.message);
    }
    const data = { ...req.body };
    console.log(data);
    const result = await Task.create(data);
    res.status(201).json(result);
  } catch (error) {
    if (error.message.toLowerCase().includes("validation failed")) {
      error.status = 400;
    }
    next(error);
  }
};

module.exports = createTask;
