Pinly.Views.Feed = Backbone.CompositeView.extend({
	
	template: JST['feed/feed'],

	className: 'feed',
	
	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	}

});