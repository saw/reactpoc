module.exports = function(router) {

	router.get('/', function (req, res) {
	  	res.render('index', {name: 'joe'});
	});

	router.get('/about', function(req, res) {
		res.render('about', {name: 'joe'});
	});
}

