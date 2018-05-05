const express = require('express');
const router = express.Router();
const ninjas = require('../models/ninjas.js');

router.get('/ninjas', (req, res) => {
	ninjas.find({}).then(data => {
		res.send(data);
	});
});

router.post('/ninjas', (req, res, next) => {
	ninjas.create(req.body).then(data => {
		res.send({
			message: '创建成功 ' + req.body.name
		});
	}).catch(next);
});

router.put('/ninjas', (req, res) => {
	ninjas.findOneAndUpdate({
		name: req.body.name
	}, req.body).then(ninjia => res.send(ninjia));
});

router.delete('/ninjas', (req, res) => {
	ninjas.remove({
		name: req.body.name
	}).then(data => {
		res.send({
			message: '删除成功 ' + req.body.name
		});
	});
});

router.delete('/removeall', (req, res) => {
	ninjas.remove({}).then(data => {
		res.send(data);
	});
});

module.exports = router;