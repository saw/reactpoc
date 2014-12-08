module.exports = function(router) {

	router.get('/', function (req, res) {
	  	res.render('index', {name: 'bob', url: req.url, signedin : false});
	});

	router.get('/about', function(req, res) {
		res.render('about', {name: 'joe', url: req.url});
	});

	router.get('/login', function(req, res) {
		res.render('index', {name: 'bob', url: req.url, signedin : true})
	});

	router.get('/home', function(req, res) {
		res.render('home', {name: 'bob', url: req.url, signedin : true})
	});
}

