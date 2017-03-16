const mongoose = require('mongoose')

const TodoList = mongoose.connect('localhost:9635/todolist')

module.exports = TodoList