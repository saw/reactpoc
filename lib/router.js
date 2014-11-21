var React = require('react');

// require('node-jsx').install();

//load templates, this could be gulped.

var templates = {};
var body = document.getElementById('content');

templates['index'] = require('../views/index.jsx');


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
	React.renderComponent(React.createElement(templates[path], {name:'joe'}), body); 
}

function Router() {

	return {

		get: addRoute,

		route: function(url) {

			routes.forEach(function(route) {
				if(url === route.route) {
					route.callback({}, new Res(), function() {});
				}
			});

		}

	};

};

module.exports = {
	Router:Router
};