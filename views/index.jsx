var React = require('react');

var HelloMessage = React.createClass({

	getInitialState: function() {
    	return {word: '!!'};
  	},

	onClick: function() {
		console.log('click');
		this.setState({word: 'fail'});
	},

	render: function() {
		return <div onClick={this.onClick}>Hello {this.props.name} {this.state.word}. <a href="/about">about</a></div>;
	}
});

module.exports = HelloMessage;