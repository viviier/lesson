var path = require('path')
var express = require('express')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var flash = require('connect-flash')
var config = require('config-lite')
var routes = require('./routes')
var pkg = require('./package')

var app = express()

// 设置模版目录
app.set('views', path.join(__dirname, 'views'))
// 设置模版引擎
app.set('view engine', 'ejs')

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))

// session中间件
app.use(session({
    resave: false,
    saveUninitialized: true,
    name: config.session.key, // 设置cookie中保存session id的字段名
    secret: config.session.secret,
    cookie: {
        maxAge: config.session.maxAge // 过期时间
    },
    store: new MongoStore({  // 把session存储到mongodb
        url: config.mongodb
    })
}))

// flash 中间件
app.use(flash())

// 处理表单
app.use(require('express-formidable')({
    uploadDir: path.join(__dirname, 'public/img'), // 上传目录
    keepExtensions: true
}))

// 设置模版全局变量
app.locals.blog = {
    title: pkg.name,
    description: pkg.description
}

// 添加模版必须的三个变量
app.use(function(req, res, next) {
    res.locals.user = req.session.user
    res.locals.success = req.flash('success').toString()
    res.locals.error = req.flash('error').toString()
    next()
})

// 路由
routes(app)

// 监听
app.listen(config.port, function(){
    console.log(`${pkg.name} listen on port ${config.port}`)
})