module.exports = function(router) {

	router.get('/', function (req, res) {
	  	res.render('index', {foo: 'bar'});
	});

	router.get('/about', function(req, res) {
		res.end('im the about page!');	
	});
}

