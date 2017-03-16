const Koa = require('koa')
const router = require('koa-router')()
const json = require('koa-json')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const jwt = require('koa-jwt')
const auth = require('./server/routes/auth')
const api = require('./server/routes/api')

const app = new Koa()
app.use(bodyParser())
app.use(json())
app.use(logger())

router.use('/auth',auth.routes())
router.use('api', jwt({secret: 'vue-koa-demo'}), api.routes())
app.use(router.routes())

app.listen(3000, () => {
    console.log('koa in port 3000')
})