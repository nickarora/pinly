Pinly.Collections.Users = Backbone.Collection.extend({

	url: '/api/users',

	model: Pinly.Models.User,

	getOrFetch: function(id){
		var that = this;
		var user = this.get(id);
		
		if (user){
			user.fetch();
		} else {
			debugger
			user = new Pinly.Models.User({id: id});
			user.fetch({
				success: function(){
					that.add(user);
				}
			});
		}
		
		return user;
	}

});

Pinly.Collections.users = new Pinly.Collections.Users();