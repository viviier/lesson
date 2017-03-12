const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const db = require('./server/db').db
const users = db.get('users')

const koa = new Koa()
koa.use(bodyParser())

users.insert(
    {
        name: 'nihao'
    }
)   

let result
const usersInfo = users.find({}, function(e, doc) {
    doc.map((item) => {
        result += item.name
    })
})


koa.use(async (ctx) => {
    ctx.body = `
        ${result}
    `
})


koa.listen(3000)