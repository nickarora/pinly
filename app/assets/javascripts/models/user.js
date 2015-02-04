Pinly.Models.User = Backbone.Model.extend({

	urlRoot: '/api/users',

	initialize: function(){
		this.logged_in = false;
	},

	boards: function () {
    this._boards = this._boards || new Pinly.Collections.Boards();
    return this._boards;
  },

	parse: function(payload){
		if (payload.boards){
			this.boards().set(payload.boards, { parse: true });
      delete payload.boards;
		}
		
		this.logged_in = payload.logged_in;

		return payload;
	}

});