const db = require('../config/db')
const user = db.get('user')

const getUserById = async function(id) {
    const userInfo = await user.find({
        name: id
    }).then(data => data.json())
    return userInfo
}

const getUserByName = async function(name) {
    const userInfo = await user.find({
        user_name: name
    }).then(data => data.json())
    return userInfo
}

module.exports = {
    getUserById,
    getUserByName
}