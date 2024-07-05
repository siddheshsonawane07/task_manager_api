const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [500, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Middleware to generate custom ID
TaskSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastTask = await Task.findOne().sort({ id: -1 });
    this.id = lastTask ? lastTask.id + 1 : 1;
  }
  next();
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
