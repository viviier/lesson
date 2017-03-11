const Koa = require('koa')
const router = require('koa-router')
const json = require('koa-json')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyParser())
app.use(json())
app.use(logger())

app.use(async (ctx, next) => {
    let start = new Date
    next()
    let ms = new Date - start
    console.log(ctx.method, ctx.url, ms)
})

app.use(async (ctx) => {
    ctx.body = 'hello'
})

app.listen(3000, () => {
    console.log('koa in port 3000')
})