// app.js

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.get('/api', (req, res) => {
	res.json({
		apilist: []
	});
});

app.post('/api/login', (req, res) => {
	let user = {
		name: 'nihao',
		age: 16
	};

	jwt.sign({user}, 'secertkey', (err, token) => {
		res.json({token});
	})
});

app.get('/api/home', verifyToken, (req, res) => {
	jwt.verify(req.token, 'secertkey', (err, data) => {
		if (err) {
			res.sendStatus(403);
		}
		else {
			res.json({
				message: '进入成功',
				data
			});
		}
	})
});

function verifyToken(req, res, next) {
	let token = req.headers['authorization'];
	
	if (token) {
		req.token = token;
		next();
	} else {
		res.sendStatus(403);
	}

}

app.listen(3000);