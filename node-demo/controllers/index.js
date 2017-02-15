let fn_index = async (ctx, next) => {
	ctx.response.body = `<h1>Index</h1>
	<form action='/signin' method='post'>
		<p>Name: <input name='name' value='koa' /></p>
		<p>Pwd: <input name='pwd' type='password' /></p>
		<p><input type='submit' value='submit'/></p>
	</form>`
}

let fn_signin = async (ctx, next) => {
	let name = ctx.request.body.name || '',
		pwd = ctx.request.body.pwd || ''
	if(name === 'koa' && pwd === '12345') {
		ctx.response.body = `<h1>Hello ${name}</h1>`
	} else {
		ctx.response.body = `<h1>Login failed</h1><p><a href='/'>try again</a></p>`
	}
}

module.exports = {
	'GET /': fn_index,
	'POST /signin': fn_signin
}