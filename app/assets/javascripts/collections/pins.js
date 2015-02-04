Pinly.Collections.Pins = Backbone.Collection.extend({
	
	url: '/api/pins',

	model: Pinly.Models.Pin,

	getOrFetch: function(id){
		var that = this;
		var pin = this.get(id);
		
		if (pin){
			pin.fetch();
		} else {
			pin = new Pinly.Models.Board({id: id});
			pin.fetch({
				success: function(){
					that.add(pin);
				}
			});
		}
		
		return pin;
	}
});


Pinly.Collections.pins = new Pinly.Collections.Pins();
