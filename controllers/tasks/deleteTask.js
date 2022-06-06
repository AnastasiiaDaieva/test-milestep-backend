const { Task } = require("../../models/task");
const CreateError = require("http-errors");

const deleteTask = async (req, res, next) => {
  try {
    console.log(req.params);
    const { taskId } = req.params;
    const result = await Task.findByIdAndRemove(taskId);
    if (!result) {
      throw new CreateError(404, "Not found");
    }
    res.json({ message: `Task '${result.name}' was deleted` });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTask;
