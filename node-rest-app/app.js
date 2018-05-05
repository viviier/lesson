// app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// mongoose
mongoose.connect('mongodb://localhost/ninjago');

// use middleware
app.use(bodyParser.json());

// router
app.use('/api', require('./routers/api.js'));

// err middleware
app.use(function(err, req, res, next) {
	res.status(422).send({
		error: err.message
	});
});

app.listen(process.env.port || 3000);

app.listen(process.env.port || 6000);