var express = require('express');

var app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/server/public'));
app.set('views', './server/views');
app.set('view engine', 'jade');

require('./server/routes/routes')(app);

app.listen(port, function(err) {
	console.log('running server on port: ' + port);
});