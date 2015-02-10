Pinly.Models.BoardPin = Backbone.Model.extend({

	urlRoot: '/api/boardpins',

	liked: function(){
		this._liked = this._liked || new Pinly.Collections.Likes();
  	return this._liked;
	},

	comments: function(){
		this._comments = this._comments || new Pinly.Collections.Comments();
		return this._comments;
	},

	parse: function(payload){

		this.numLiked = payload.numLiked;
		delete payload.numLiked;

		if (payload.liked){
			this.liked().set([payload.liked], { parse: true });
			delete payload.liked;
		} else {
			this.liked().set([], { parse: true });
		}

		if (payload.comments){
			this.comments().set(payload.comments, { parse: true } );
			delete payload.comments;
		}

		return payload;
	}

});