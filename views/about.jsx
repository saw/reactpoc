var React = require('react');

var message = React.createClass({

	getInitialState: function() {
    	return {word: '!!'};
  	},

	onClick: function() {
		this.setState({word: 'fail'});
	},

	render: function() {
		return <div onClick={this.onClick}>This is the about page. <a href="/">go home</a></div>;
	}
});

module.exports = message;