const todolist = require('../models/todolist')

const getTodolist = async (ctx) => {
    const id = ctx.params.id
    const result = await todolist.getTodolistById(id)
    ctx.body = result
}

const createTodolist = async (ctx) => {
    const data = ctx.request.body
    const result = await todolist.createTodolist(data)
    ctx.body = {
        success: true
    }
}

const removeTodolist = async (ctx) => {
    const id = ctx.params.id
    const userid = ctx.params.userid
    const reuslt = await todolist.removeTodolist(id, userid)

    ctx.body = {
        success: true
    }
}

const updateTodolist = async (ctx) => {
    const id = ctx.params.id
    const userid = ctx.params.userid
    let status = ctx.params.status
    status == '0' ? status = true : status = false
    const result = await todolist.updateTodolist(id, userid, status)

    ctx.body = {
        success: true
    }
}

module.exports = (router) => {
    router.get('/todolist/:id', getTodolist),
    router.post('/todolist', createTodolist),
    router.delete('/todolist/:userid/:id', removeTodolist),
    router.put('/todolist/:userid/:id/:status', updateTodolist)
}