var React = require('react');
require('node-jsx').install();

module.exports = function(filePath, options, callback) {
	var template = require(filePath);
	var rendered = React.renderToString(React.createElement(template, options));

	var out = "<html><head><title>Hello</title></head><body><div id=\"content\">"+rendered+"</div><script src=\"/js/clientapp.js\"></script></body></html>";
	callback(null, out);
};