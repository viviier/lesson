const Koa = require('koa')
const router = require('koa-router')()
const json = require('koa-json')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const auth = require('./server/routes/auth')
const cors = require('kcors')

const app = new Koa()
app.use(bodyParser())
app.use(json())
app.use(logger())
app.use(cors())

router.use('/auth',auth.routes())
app.use(router.routes())

app.listen(3000, () => {
    console.log('koa in port 3000')
})