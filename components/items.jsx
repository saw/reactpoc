var React = require('react');
var app;

var message = React.createClass({

   getInitialState: function() {
      return null;
   },

   onClick: function() {
      app.AppDispatcher.dispatch({
         eventName: 'new-item',
         newItem: {name: 'Marco'}
      });
   },

   componentDidMount: function() {
      app.ListStore.bind('change', this.listChanged);
   },

   listChanged: function() {
      this.forceUpdate();
   },

   componentWillUnmount: function() {
      app.ListStore.unbind( 'change', this.listChanged );
   },

   render: function() {
      console.log(app);
       // Remember, ListStore is global!
       // There's no need to pass it around
       var items = app.ListStore.getAll();

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
}