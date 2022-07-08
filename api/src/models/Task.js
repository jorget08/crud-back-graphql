const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
  {
    title: {type: String, unique: true, required: true},
    description: {type: String},
  },{
    timestamps: true
  }
)

Task = mongoose.model('task', TaskSchema)
module.exports = Task