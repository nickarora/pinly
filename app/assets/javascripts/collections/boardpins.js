Pinly.Collections.BoardPins = Backbone.Collection.extend({
	
	url: '/api/boardpins',

	model: Pinly.Models.BoardPin

});

Pinly.Collections.boardpins = new Pinly.Collections.BoardPins();