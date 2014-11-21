var router = require('./lib/router').Router();
var routes = require('./routes.js')(router);

var content = document.getElementById('content');

content.addEventListener('click', function(e) {
	if(e.target.tagName === 'A' && e.target.href) {
		e.preventDefault();
		console.log(e.target.pathname);
		router.route(e.target.pathname);
		window.history.pushState({},null, e.target.pathname);
	}
});

window.addEventListener('popstate', function(e) {
	router.route(window.location.pathname);
});

// router.route('/');