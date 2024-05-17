const Task = require("../models/TasksSchema");

//  fetch all task
const getAllTasks = async (req, res) => {
  try {
    const Alltask = await Task.find({});
    res.status(201).json({ Alltask });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get a single task
const getTask = async (req, res) => {
  try {
    const singletask = await Task.findById(req.params.id);
    if (!singletask) {
      return res.status(404).json({ msg: "Task not found !" });
    }
    res.status(200).json(singletask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update a task by using an id
const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateTask) {
      return res.status(404).json({ msg: `Task not found !!` });
    }
    res.status(200).json(updateTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//  delete a task based on id
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ msg: `Task not found` });
    }
    res.status(200).json({ msg: `Task deleted`, deletedTask });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
