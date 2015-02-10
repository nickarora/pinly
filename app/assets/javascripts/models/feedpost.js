Pinly.Models.FeedPost = Backbone.Model.extend({

	urlRoot: '/api/feeds',

  user: function(){
  	this._user = this._user || new Pinly.Models.User();
  	return this._user;
  },

	pin: function () {
    this._pin = this._pin || new Pinly.Models.Pin();
    return this._pin;
  },

	board: function () {
    this._board = this._board || new Pinly.Models.Board();
    return this._board;
  },

  liked: function(){
		this._liked = this._liked || new Pinly.Collections.Likes();
  	return this._liked;
	},

	comments: function(){
		this._comments = this._comments || new Pinly.Collections.Comments();
		return this._comments;
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

		if (payload.pinner){
			this.pinner = payload.pinner;
			delete payload.pinner;
		}

		if (payload.pin){
			this.pin().set(payload.pin, { parse: true });
      delete payload.pin;
		}

		if (payload.board){
			this.board().set(payload.board, { parse: true });
      delete payload.board;
		}

		if (payload.user){
			this.user().set(payload.user, { parse: true });
			delete payload.user;
		}

		if (payload.comments){
			this.comments().set(payload.comments, { parse: true } );
			delete payload.comments;
		}

		return payload;
	}

});