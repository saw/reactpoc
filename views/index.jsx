var React = require('react');

var HelloMessage = React.createClass({

	getInitialState: function() {
    	return {word: '!!'};
  	},

	onClick: function() {
		this.setState({word: 'fail'});
	},

	render: function() {
		return <div onClick={this.onClick}>Hello {this.props.name} {this.state.word}</div>;
	}
});

module.exports = HelloMessage;