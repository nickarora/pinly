Pinly.Views.Notification = Backbone.CompositeView.extend({

	template: JST['notifications/notification'],
	tagName: 'li',

	initialize: function() {
		$.cloudinary.config({ cloud_name: 'pinly', api_key: '938513664846214'});
		this.avatarSettings = { radius: "max", 
														width: 50, height: 50, 
														crop: "thumb", gravity: "face" };
	},

	events: {
		'click': 'viewPin'
	},

	viewPin: function(event){
		event.preventDefault();
		
		var view = new Pinly.Views.PinBig({
		  model: this.model.pin(),
			pinner: this.model.pinner,
			boardpin: this.model.boardpin(), 
			board: this.model.board(),
			user: this.model.user()
		});

		view.open();
		this.model.destroy();
	},

	render: function(){
		var renderedContent = this.template({
		  notification: this.model
		});
		this.$el.html(renderedContent);
		this.renderImage();
		return this;
	},

	renderImage: function(){
		var avatar = this.model.user().get('cloudinary_id');
		var $img = $.cloudinary.image(avatar, this.avatarSettings);
		this.$('.notification-avatar').html($img);
	}

});