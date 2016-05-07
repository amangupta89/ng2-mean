var jwt = require('express-jwt'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	config = require('./config')[env];

exports.authCheck = jwt({
	secret: new Buffer(config.auth0Secret, 'base64'),
	audience: config.auth0ClientId
});
