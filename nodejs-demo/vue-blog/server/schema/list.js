const mongoose = require('mongoose')
const schema = mongoose.Schema

ListSchema = new schema({
    userid: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})

module.exports = ListSchema