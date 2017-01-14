const express = require('express')
const path = require('path')

let app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirnmae, 'dist', 'index.html'))
})

const port = 8080

app.listen(port, () => {
	console.log('running...')
})