const mongoose = require('mongoose')

UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

let UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel