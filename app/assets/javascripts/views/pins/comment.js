Pinly.Views.Comment = Backbone.CompositeView.extend({
	
	template: JST['pins/comment'],
	tagName: 'li',

	initialize: function(){
		this.avatarSettings = { radius: "max", 
														width: 34, height: 34, 
														crop: "thumb", gravity: "face" };
	},

	render: function(){

		var renderedContent = this.template({
		  comment: this.model
		});

		this.$el.html(renderedContent);
		this.renderAvatar();

		return this;
	},

	renderAvatar: function(){
		var $img = $.cloudinary.image(this.model.user().get('cloudinary_id'), 
																	this.avatarSettings );
		this.$('.comment-avatar').html($img);
	}

});