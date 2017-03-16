require('../mongoose')

const User = require('../models/user')

let user = new User({
    username: 'nico',
    password: '123456'
})

user.save((err, doc) => {
    if(err) console.log('err')

    console.log(doc)
})