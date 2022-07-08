const Task = require('../models/Task')

const resolvers = {
    Query: {
        hello: () => 'Hello word',
        getAllTask: async () => {
            const tasks = await Task.find()
            //console.log(tasks)
            return tasks
        },
        getTask: async (parent, args, context, info) => {
            const task = await Task.findById(args.id)
            return task
        }
    },

    Mutation: {
        createTask: async (parent, args, context, info) => {
            const {title, description} = args
            const task = new Task({title, description})
            task.save()
            //console.log(task)
            return task
        },


        deleteTask: async (parent, {id}, constext, info) => {
            await Task.findByIdAndDelete(id)
            return "Task deleted"
        },

        updateTask: async (_, {id, task}, context, info) => {
            //{$set: task} es para que actualice el campo que envien, si envian titulo
            //actualiza titulo, si nevian titulo y descripcion actualiza los 2
            //es para poder mostrar la nueva task actualizada, sino mostraria la vieja
            const taskU = await Task.findByIdAndUpdate(id, {$set: task}, {new: true})
            return taskU
        }
    }
}

module.exports = {resolvers}