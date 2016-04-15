var auth = require('../config/auth');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index');
	});

	app.post('/login', auth.authenticate);

	app.post('/logout', function(req, res) {
		req.logout();
		res.end();
	});

	require('./users-api')(app);
}