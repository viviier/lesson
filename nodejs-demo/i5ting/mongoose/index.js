const mongoose = require('mongoose')

const connect = mongoose.connect('localhost:9527/database')

module.exports = connect