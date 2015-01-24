var React = require('react');
var Nav = React.createClass({

  getInitialState: function() {
    return {};
  },



  render: function() {
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">React POC</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={this.props.url == '/' ? 'active' : ''}><a href="/">Home</a></li>
            <li className={this.props.url == '/about' ? 'active' : ''}><a href="/about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/auth/google">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
});

module.exports = function() {
  return Nav;
}
