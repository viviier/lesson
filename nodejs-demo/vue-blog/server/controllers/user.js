const user = require('../models/user')
const jwt = require('jsonwebtoken')

const getUserInfo =  async (ctx) => {
    const id = ctx.params.id
    const result =  await user.getUserById(id)
    ctx.body = result
}

const postUserAuth = async (ctx) => {
    const data = ctx.request.body
    const userInfo = await user.getUserByName(data.name)

    if(userInfo != null) {
        if(userInfo.password == data.password) {
            const userToken = {
                name: userInfo.username,
                id: userInfo.id,
            }
            let secret = 'vue-koa-demo'
            const token = jwt.sign(userToken, secret)
            ctx.body = {
                success: true,
                token: token
            }
        } else {
            ctx.body = {
                success: false,
                info: '密码错误'
            }
        }
    } else {
        ctx.body = {
            success: false,
            info: '用户不存在'
        }
    }
}

module.exports = {
    auth: (router) => {
        router.get('/user/:id', getUserInfo)
        router.post('/user', postUserAuth)
    }
}