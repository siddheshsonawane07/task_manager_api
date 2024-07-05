const Task = require("../models/models");

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get single task
const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ id });
    if (!task) {
      return res.status(404).json({ message: `No task with id: ${id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Create new task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    await task.save();
    res.status(201).json({ task });
  } catch (error) {
    // res.status(500).json({ message: "Something went wrong, please try again" });
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// Edit task
const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate({ id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ message: `No task with id: ${id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ id: parseInt(id) });
    if (!task) {
      return res.status(404).json({ message: `No task with id: ${id}` });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
};
