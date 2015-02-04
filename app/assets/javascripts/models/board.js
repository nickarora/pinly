Pinly.Models.Board = Backbone.Model.extend({

	urlRoot: '/api/boards',

	pins: function () {
    this._pins = this._pins || new Pinly.Collections.Pins();
    return this._pins;
  },

	parse: function(payload){
		if (payload.pins){
			this.pins().set(payload.pins, { parse: true });
      delete payload.pins;
		}
		
		return payload;
	}

	
});