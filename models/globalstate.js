var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');


var state = {};

var globalState = merge(EventEmitter.prototype, {
	getState : function() {
		return state;
	},

	emitChange: function() {
		this.emit('change');
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	}
});

module.exports = globalState;
