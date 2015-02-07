Pinly.Views.Header = Backbone.CompositeView.extend({
	
	template: JST['header/header'],
	className: 'header-container',

	initialize: function(){
		 $(window).on("resize", this.updateCSS.bind(this));
	},

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

		this.updateCSS();
		return this;
	},

	updateCSS: function(){
		var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var vpWidth = Math.ceil(vpWidth * 0.97);

		if (vpWidth >= 740) {
			this.$el.animate( { width: this.getWidth() } , { duration:500, queue: false} );	
		}
	},

	getWidth: function(){
		var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var vpWidth = Math.ceil(vpWidth * 0.97);
		var numOfCols = Math.floor(vpWidth/245);
		return numOfCols * 245;
	}

});