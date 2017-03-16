const mongoose = require('mongoose')
const schema = mongoose.Schema

ListSchema = new schema({
    id: {
        type: String,
        required: true
    },
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