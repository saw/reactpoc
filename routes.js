module.exports = function(router) {

	router.get('/', function (req, res) {
	  	res.render('index', {name: 'bob', url: req.url});
	});

	router.get('/about', function(req, res) {
		res.render('about', {name: 'joe', url: req.url});
	});
}

