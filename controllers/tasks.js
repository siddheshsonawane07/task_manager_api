const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const getSingleTask = (req, res) => {
    res.json({id:req.params.id})
}

const createTask = (req, res) => {
    res.json(req.body)
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