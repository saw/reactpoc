var React = require('react');

// require('node-jsx').install();

//load templates, this could be gulped.

var templates = {};
var body = document.getElementById('content');

templates['index'] = require('../views/index.jsx');
templates['about'] = require('../views/about.jsx');

//ls
var routes = [];

function addRoute(route, callback) {

	var obj = {};
	obj.route = route;
	obj.callback = callback;
	routes.push(obj);
}

function Res() {

}

Res.prototype.end = function(str) {
	console.log('end', str);
}

Res.prototype.render = function(path, data) {
	React.renderComponent(React.createElement(templates[path], data), body); 
}

function Router() {

	return {

		get: addRoute,

		route: function(url) {
			var goodRoute = false;
			routes.forEach(function(route) {
				if(url === route.route) {
					goodRoute = true;
					route.callback({
						url : url
					}, new Res(), function() {});
				}
			});

			return goodRoute;

		}

	};

};

module.exports = {
	Router:Router
};