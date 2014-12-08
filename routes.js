module.exports = function(router) {

	router.get('/', function (req, res) {
	  	res.render('index', {name: 'bob', url: req.url, signedin : req.ctx.signedin, user:req.ctx.user, ctx:req.ctx});
	});

	router.get('/about', function(req, res) {
		res.render('about', {name: 'joe', url: req.url});
	});

}

