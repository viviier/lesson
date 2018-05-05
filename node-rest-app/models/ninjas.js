const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ninjasSchema = new Schema({
	name: {
		type: String,
		required: [true, 'name is required']
	},
	rank: String,
	available: {
		type: Boolean,
		default: false
	}
});

let Ninjas = mongoose.model('ninjas', ninjasSchema);

module.exports = Ninjas;