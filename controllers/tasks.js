const Task = require('../models/models')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const getSingleTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return res.status(404).json({ msg: `no task with id ${taskID}` })
    }
    res.status(200).json({ task })
})

const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body)
    res.status(201).json({ task })

})

const editTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return res.status(404).json({ msg: `no task with id ${taskID}` })
    }

    res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    res.status(201).json({ task })
    if (!task) {
        return res.status(404).json({ msg: `no task with id ${taskID}` })
    }
    res.status(200).send()

})


module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    editTask,
    deleteTask,
}