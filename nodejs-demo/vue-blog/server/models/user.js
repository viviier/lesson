const mongoose = require('mongoose')
const db = require('../config/db')
const userSchame = require('../schema/user')

const userModel = mongoose.model('User', userSchame)

const getUserById = async (id) => {
   const userInfo = await userModel.findOne({
        'id': id
    })
    return userInfo
}

const getUserByName = async (name) => {
    const uerInfo = await userModel.findOne({
        'username': name
    })
    return uerInfo
}

module.exports = {
    getUserById,
    getUserByName
}