Pinly.Models.BoardPin = Backbone.Model.extend({

	urlRoot: '/api/boardpins',

	liked: function(){
		this._liked = this._liked || new Pinly.Collections.Likes();
  	return this._liked;
	},

	parse: function(payload){
		
		if (payload.liked){
			this.liked().set([payload.liked], { parse: true });
			delete payload.liked;
		} else {
			this.liked().set([], { parse: true });
		}

		this.numLiked = payload.numLiked;
		delete payload.numLiked;

		return payload;
	}

});