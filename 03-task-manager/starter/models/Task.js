const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name property is required in Task but missing here'],
        maxLength: [20, 'string cannot be more than 20 characters'],
        trim: true 
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Task', TaskSchema) 