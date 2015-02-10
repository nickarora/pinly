Pinly.Models.Comment = Backbone.Model.extend({

	urlRoot: '/api/comments',

	user: function() {
		this._user = this._user || new Pinly.Models.User();
  	return this._user;
	},

	parse: function(payload){

		if (payload.user){
			this.user().set(payload.user, { parse: true } );
			delete payload.user;
		}

		return payload;
	}

});