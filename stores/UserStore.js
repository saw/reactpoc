

module.exports = function(AppDispatcher) {
	AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case 'new-item':

            // We get to mutate data!
            ListStore.items.push( payload.newItem );
            break;

    }

    return true; // Needed for Flux promise resolution

	});
}