const Task = require('../models/models')

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const getSingleTask = (req, res) => {
    res.json({id:req.params.id})
}

const createTask = async (req, res) => {

    try{
    const task = await Task.create(req.body)
    res.status(201).json({task})
    } catch(err){
        res.status(500).json({msg:err})
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