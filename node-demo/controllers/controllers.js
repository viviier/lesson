const fs = require('fs')

function addMapping(router, mapping) {
	for(let url in mapping) {
		if(url.startsWith('GET ')) {
			let path = url.substring(4)
			router.get(path, mapping[url])
		} else if (url.startsWith('POST ')) {
			let path = url.substring(5)
			router.post(path, mapping[url])
		} else {
			console.log('error')
		}
	}
}

function addControllers(router) {
	let files = fs.readdirSync(__dirname + '/controllers')
	let js_files = files.filter((f) => f.endsWith('.js'))

	for(let f of js_files) {
		let mapping = require(__dirname + '/controllers/' + f)
		addMapping(router, mapping)
	}
}

module.exports = {
	router = require('koa-router')()
	addControllers(router)
	return router.routes()
}