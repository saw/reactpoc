// Global object representing list data and logic
var MicroEvent = require('../lib/vendor/microevent.js');

var ListStore = {

    // Actual collection of model data
    items: [],

    // Accessor method we'll use later
    getAll: function() {
        return this.items;
    }

};

MicroEvent.mixin(ListStore);

module.exports = function(AppDispatcher, app) {
	app.ListStore = ListStore;

	AppDispatcher.register(function(payload) {
		console.log('dis');
		switch(payload.eventName) {
			case 'new-item':
				ListStore.items.push(payload.newItem);
				ListStore.trigger('change');
				break;
		}

	return true;

	});
}
