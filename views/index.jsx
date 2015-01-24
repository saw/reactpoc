var app;
var React = require('react');
var Nav = require('./nav.jsx')();
var Items;
var Signin = require('./Signin.jsx')();

var HelloMessage = React.createClass({

	getInitialState: function() {
    	return {
    		foo: 'bar'
    	};
  	},

	onClick: function() {
		console.log('click');
		this.setState({word: 'fail'});
	},

	render: function() {

		var content;

		if(!this.props.signedin) {
			content = <Signin />;
		} else {
			content = <p> Hello! </p>
		}

		return (
			<div>
				<Nav {...this.props}></Nav>
				<div className="container">
					<div>
						<div>
							<h1>Hello world</h1>
							<Items />
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = function(clientApp) {
	app = clientApp;
	console.log('oh', clientApp);
	Items = require('../components/items.jsx')(app);
	return HelloMessage;
}