const { Task, schemas } = require("../../models/task");
const CreateError = require("http-errors");

const createTask = async (req, res, next) => {
  try {
    console.log(req.body);
    const { error } = schemas.add.validate(req.body);
    if (error) {
      throw new CreateError(400, error.message);
    }

    const data = { ...req.body };
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
