Pinly.Views.PinCardShow = Backbone.CompositeView.extend({
	
	template: JST['pins/show_card'],

	render: function(){
		var renderedContent = this.template({
		  pin: this.model
		});
		this.$el.html(renderedContent);
		return this;
	}


});