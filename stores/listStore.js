// Global object representing list data and logic
var MicroEvent = require('../lib/vendor/microevent.js');
var dispatcher;
var ListStore = {

   // Actual collection of model data
   items: [],

   // Accessor method we'll use later
   getAll: function() {
     return this.items;
   },

   add: function(name) {
      console.log(this.items);
      dispatcher.dispatch({
         eventName: 'new-item',
         newItem: {name: name}
      });
   }

};

MicroEvent.mixin(ListStore);

module.exports = function(AppDispatcher, app) {
   app.ListStore = ListStore;
   dispatcher = AppDispatcher;
   AppDispatcher.register(function(payload) {
      switch(payload.eventName) {
         case 'new-item':
            console.log(payload);
            ListStore.items.push(payload.newItem);
            ListStore.trigger('change');
            break;
      }

   return true;

   });
}
