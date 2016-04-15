var express = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	passport = require('passport');

var app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = process.env.PORT || 5000;

var config = require('./server/config/config')[env];

require('./server/config/mongoose')(config);

app.use(express.static(__dirname + '/server/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/app'));
app.set('views', './server/views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
	secret: 'ng2 mean app secret',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

require('./server/models/User')();

require('./server/routes/routes')(app);
require('./server/config/passport')();

app.listen(port, function(err) {
	console.log('running server on port: ' + port);
});