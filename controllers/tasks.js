const Task = require('../models/models')

const getAllTasks = async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const getSingleTask = (req, res) => {
    res.json({ id: req.params.id })
}

const createTask = async (req, res) => {

    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const editTask = (req, res) => {
    res.send('edit task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    editTask,
    deleteTask,
}