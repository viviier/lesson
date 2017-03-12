const monk = require('monk')

exports.db = monk('localhost:2555/mydbdemo')