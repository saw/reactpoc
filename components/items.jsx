var React = require('react');
var app;

var message = React.createClass({

   getInitialState: function() {
      return {
         items: app.ListStore.getAll()
      };
   },

   onClick: function() {
      app.ListStore.add('Bob' + Math.round(Math.random() * 1000).toString(32));  
   },

   componentDidMount: function() {
      app.ListStore.bind('change', this.listChanged);
   },

   listChanged: function() {
      this.setState({
         items: app.ListStore.getAll()
      });
   },

   componentWillUnmount: function() {
      app.ListStore.unbind( 'change', this.listChanged );
   },

   render: function() {

       // Remember, ListStore is global!
       // There's no need to pass it around
       var items = this.state.items;
       // Build list items markup by looping
       // over the entire list
       var itemHtml = items.map( function( listItem ) {
           // "key" is important, should be a unique
           // identifier for each list item
           return <li key={ listItem.id }>
               { listItem.name }
             </li>;

       });

       return <div>
          <button onClick={ this.onClick }>New Item</button>
           <ul>
               { itemHtml }
           </ul>

       </div>;
   }
});

module.exports = function(theApp) {
   app = theApp;
   return message;
};