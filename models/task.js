const Joi = require("joi");
const { Schema, model } = require("mongoose");

const taskSchema = Schema(
  {
    name: {
      type: String,
      ref: "category",
      required: [true, "Set the name"],
    },
    description: {
      type: String,
      required: [true, "Set the description"],
    },
    priority: {
      type: { value: String, label: String, number: Number },
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
  name: Joi.string().required(),
  description: Joi.string().required(),
  priority: Joi.object({
    value: Joi.string(),
    label: Joi.string(),
    number: Joi.number(),
  }).required(),
  isDone: Joi.boolean(),
  dueDate: Joi.date().required(),
});

const Task = model("task", taskSchema);

module.exports = { Task, schemas: { add: joiAddTask } };
