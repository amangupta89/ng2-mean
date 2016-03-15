
module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/api/test', function(req, res) {
		var data = [
			{
				name: 'Preston',
				age: 27
			},
			{
				name: 'Amanda',
				age: 27
			},
			{
				name: 'Emma',
				age: 3
			}
		];
		console.log('/api/test: ', data);
		res.send(data)
	});
}