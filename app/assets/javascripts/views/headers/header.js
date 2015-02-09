Pinly.Views.Header = Backbone.CompositeView.extend({
	
	template: JST['header/header'],
	className: 'header-container',

	initialize: function(){
		 $(window).on("resize", this.updateCSS.bind(this));
		 this.updateCSS({preventAnimate: true});
	},

	events: {
		'click .current-user': 'showProfile',
		'click .logo': 'showHome',
		'blur .search': 'formHandler',
		'click .search-button': 'searchHandler'
	},

	searchHandler: function(event) {
		event.preventDefault();
		var $searchTerms = this.$('.search').find('input').val();
		if ($searchTerms == "") { return; }
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
		this.$('.search').tokenField({
			regex: /\w+/,
			max: 5
		});
		this.$('.search').css('width', '200px')
		return this;
	},

	updateCSS: function(options){
		var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var vpWidth = Math.ceil(vpWidth * 0.97);

		if (vpWidth >= 740) {
			if (!options.preventAnimate) {
				this.$el.animate( { width: this.getWidth() } , { duration:500, queue: false} );	
			} else {
				this.$el.css('width', this.getWidth());
			}
		}
	},

	getWidth: function(){
		var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var vpWidth = Math.ceil(vpWidth * 0.97);
		var numOfCols = Math.floor(vpWidth/245);
		return numOfCols * 245;
	}

});