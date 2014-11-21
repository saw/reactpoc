var React = require('react');
require('node-jsx').install();

module.exports = function(filePath, options, callback) {
	var template = require(filePath);
	var rendered = React.renderToString(React.createElement(template, options));
	callback(null, rendered);
};