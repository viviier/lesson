const mongoose = require('mongoose')
const db = require('../config/db')
const listSchema = require('../schema/list')
const uuid = require('uuid')

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
        id,
        userid: data.id,
        content: data.content,
        status: data.status
    })
    await list.save((err) => console.log(err))
    return true
}

const removeTodolist = async (id, userid) => {
    let list = await listModel.remove({
        id,
        userid
    })
    return true
}

const updateTodolist = async (id, userid, status) => {
    let list = await update({
        id,
        userid
    }, {
        status
    })
    return true
}

module.exports = {
    getTodolistById,
    createTodolist,
    removeTodolist,
    updateTodolist
}