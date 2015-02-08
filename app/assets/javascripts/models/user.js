Pinly.Models.User = Backbone.Model.extend({

	urlRoot: '/api/users',

	boards: function () {
    this._boards = this._boards || new Pinly.Collections.Boards();
    return this._boards;
  },

	parse: function(payload){

		if (payload.boards){
			this.boards().set(payload.boards, { parse: true });
      delete payload.boards;
		}
		
		return payload;
	}

});