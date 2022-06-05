const { Task } = require("../../models/task");

const getTasks = async (req, res, next) => {
  try {
    console.log(req.query);
    // const { _id } = req.user;
    // const data = await Task.find(
    //   { owner: _id },
    //   "-createdAt -updatedAt"
    // ).populate("owner", "email");
    const data = await Task.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getTasks;
