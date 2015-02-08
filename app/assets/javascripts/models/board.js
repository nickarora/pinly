Pinly.Models.Board = Backbone.Model.extend({

	urlRoot: '/api/boards',

	initialize: function(){
		this.pinner = null;
		this.follow = null;
	},

	pins: function () {
    this._pins = this._pins || new Pinly.Collections.Pins();
    return this._pins;
  },

  boardpins: function() {
  	this._boardpins = this._boardpins || new Pinly.Collections.BoardPins();
  	return this._boardpins;
  },

  user: function(){
  	this._user = this._user || new Pinly.Models.User();
  	return this._user;
  },

	parse: function(payload){
		
		if (payload.pinner){
			this.pinner = payload.pinner;
			delete payload.pinner;
		}

		if (payload.follow){
			this.follow = new Pinly.Models.Follow();
			this.follow.set(payload.follow, { parse: true });
			delete payload.follow;
		}

		if (payload.user){
			this.user().set(payload.user, { parse: true });
			delete payload.user;
		}

		if (payload.pins){
			this.pins().set(payload.pins, { parse: true });
      delete payload.pins;
		}

		if (payload.boardpins){
			this.boardpins().set(payload.boardpins, { parse: true });
			delete payload.boardpins;
		}
		
		return payload;
	}
	
});