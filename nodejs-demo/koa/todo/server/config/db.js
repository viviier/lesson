const monk = require('monk')
const db = monk('localhost:27017/mydb')

module.exports = db