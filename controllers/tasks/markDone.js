const { schemas } = require("../../models/task");
const CreateError = require("http-errors");
const updDone = require("./updDone");

const markDone = async (req, res, next) => {
  try {
    const { error } = schemas.patchDone.validate(req.body);
    if (error) {
      throw new CreateError(400, { message: "missing field favorite" });
    }
    console.log(req.params);
    const { taskId } = req.params;

    const result = await updDone(taskId, req.body);

    if (!result) {
      throw new CreateError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    if (error.message.toLowerCase().includes("cast to objectid failed")) {
      error.status = 404;
      error.message = "Not Found";
    }
    next(error);
  }
};

module.exports = markDone;
