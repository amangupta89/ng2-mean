var auth = require('../config/auth');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index');
	});

	require('./users-api')(app);
};