const Joi = require("joi");
const { Schema, model } = require("mongoose");

const taskSchema = Schema(
  {
    title: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: [true, "Set the title"],
    },
    description: {
      type: String,
      required: [true, "Set the title"],
    },
    priority: {
      type: String,
      required: [true, "Set the priority"],
    },

    isDone: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
      required: [true, "Set the due date"],
    },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    //   required: true,
    // },
  },
  { versionKey: false, timestamps: true }
);

const joiAddTask = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  priority: Joi.string().required(),
  isDone: Joi.boolean(),
  dueDate: Joi.date().required(),
});

const Task = model("task", taskSchema);

module.exports = { Task, schemas: { add: joiAddTask } };
