const user = require('../models/user')
const jwt = require('koa-jwt')

const getUserInfo = async function(){
    const id = this.params.id
    const result = await user.getUserById(id)
    this.body = result
}

const postUserAuth = async function(){
    const data = this.request.body
    const userInfo = await user.getUserByName(data.name)

    if(userInfo !== null) {
        if(userInfo.password != data.password) {
            this.body = {
                success: false,
                info: 'cuowu'
            }
        } else {
            const userToken = {
                name: userInfo.user_name,
                id: userInfo.id
            }
            const secret = 'koa-demo'
            const token = jwt.sign(userToken, secret)
            this.body = {
                success: true,
                token: token
            }
        }
    } else {
        this.body = {
            success: false,
            info: 'bucunzai'
        }
    }
}

module.exports = {
    auth: (router) => {
        router.get('/user/:id', getUserInfo),
        router.post('/user', postUserAuth)
    }
}