const mongoose = require('mongoose')
const db = require('../config/db')
const listSchema = require('../schema/list')

const listModel = mongoose.model('List', listSchema)

const getTodolistById = async (id) => {
    const todolist = await listModel.find({
        'userid': id
    }, (err, doc) => {
        return [doc.id, doc.content, doc.status]
    })
    return todolist
}

const createTodolist = async (data) => {
    let list = await new listModel({
        userid: data.id,
        content: data.content,
        status: data.status
    }, (err) => {
        if(err) {
            return err
        } else {
        list.save((err) => {
        if(err) console.log(err)

        console.log('save success')
    })
        }
    })
    return true
}

module.exports = {
    getTodolistById,
    createTodolist
}