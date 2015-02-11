Pinly.Views.Notification = Backbone.CompositeView.extend({

	template: JST['notifications/notification'],
	tagName: 'li',

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
		return this;
	}

});