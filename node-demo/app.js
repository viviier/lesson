const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const controller = require('./controllers')


app.use(async (ctx, next) => {
	console.log('ok')
	await next()
})

app.use(bodyParser())

app.use(controller())

app.listen(3000)
console.log('ok')