// app.js

const express = require('express');
const app = express();

// socket.io
const socket = require('socket.io');

// static file
app.use(express.static('./public'));

let server = app.listen(3000, () => console.log('ok'));

// create io
var io = socket(server);

io.on('connection', (socket) => {
	socket.on('chat', data => {
		io.sockets.emit('chat', data);
	});

	socket.on('typing', data => {
		socket.broadcast.emit('typing', data);
	});
});