const { Task } = require("../../models/task");

const updDone = async (id, body) =>
  await Task.findByIdAndUpdate(id, body, {
    new: true,
  });

module.exports = updDone;
