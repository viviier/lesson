const Koa = require('koa')
const cheerio = require('cheerio')
const superagent = require('superagent')
const app = new Koa()
const router = require('koa-router')()

router.use('/',  (ctx, next) => {
     superagent.get('http://movie.douban.com/subject/11529526')
        .end((err, res) => {
            if(err) {
                next(err)
            }
            console.log(res)
            let $ = cheerio.load(res.text)

            let items = []

           item.push($('#info span:nth-child(1) a').text())
            console.log(items)
        })
})

app.use(router.routes())

app.listen(3000)