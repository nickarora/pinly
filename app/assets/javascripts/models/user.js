Pinly.Models.User = Backbone.Model.extend({

	urlRoot: '/api/users',

	boards: function () {
    this._boards = this._boards || new Pinly.Collections.Boards();
    return this._boards;
  },

	parse: function(payload){

		this.boardCount = payload.boardCount;
		this.pinCount = payload.pinCount;
		this.likeCount = payload.likeCount;
		this.followerCount = payload.followerCount;
		this.followedCount = payload.followedCount;

		delete payload.boardCount;
		delete payload.pinCount;
		delete payload.likeCount;
		delete payload.followerCount;
		delete payload.followedcount;

		if (payload.boards){
			this.boards().set(payload.boards, { parse: true });
      delete payload.boards;
		}
		
		return payload;
	}

});