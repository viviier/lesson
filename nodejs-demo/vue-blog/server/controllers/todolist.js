const todolist = require('../models/todolist')

const getTodolist = async (ctx) => {
    const id = ctx.params.id
    console.log('id')
    const result = await todolist.getTodolistById(id)
    ctx.body = result
}

const createTodolist = async (ctx) => {
    const data = ctx.request.body
    const result = await todolist.createTodolist(data)

    this.body = {
        success: true
    }
}

module.exports = (router) => {
    router.get('/todolist/:id', getTodolist),
    router.post('/todolist', createTodolist)
}