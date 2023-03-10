const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
       const tasks = await Task.find({})
       res.status(200).json({ tasks })
    } catch (error) { 
        res.status(500).json({ msg: error })       
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
 
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findById({_id: taskID})
        if (task) {
            res.status(201).json({ task})
        } else {
            res.status(400).json({ msg: `No task with id: '${taskID}' found `})
        }
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}



const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findByIdAndDelete({_id: taskID})
        if (task) {
            // res.status(201).json({ task})
            // res.status(201).send()
            res.status(201).json({ task: null, status: `success`})
        } else {
            res.status(400).json({ msg: `Task has either been deleted or is non-existent in the database`})
        }
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

    const updateTask = async (req, res) => {
        try {
           const {id: taskID} = req.params
           const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true
           })

           if(task) {
             res.status(200).json({ task })
           } else {
             res.status(404).json({ msg: `No task with id:${taskID} found`})
           }
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}