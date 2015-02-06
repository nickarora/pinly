Pinly.Views.Header = Backbone.CompositeView.extend({
	
	template: JST['header/header'],

	events: {
		'click .current-user': 'showProfile',
		'click .logo': 'showHome'
	},

	showProfile: function(event){
		event.preventDefault();
		$(event.currentTarget).blur();
		Backbone.history.navigate('#/users/' + Pinly.CURRENT_USER.id, {trigger: true});
	},

	showHome: function(event){
		event.preventDefault();
		$(event.currentTarget).blur();
		Backbone.history.navigate('#', {trigger: true});
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	}

});