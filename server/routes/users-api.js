var users = require('../controllers/users'),
	auth = require('../config/auth');

module.exports = function(app) {
	app.post('/api/users', users.createUser);
	app.put('/api/users', auth.requiresApiLogin, users.updateUser);
	app.get('/api/users', auth.requiresApiLogin, users.getUsers);
	app.get('/api/users/auth', function(req, res) {
		if(req.user) {
			res.send(true);
		} else {
			res.send(false);
		}
	});
}