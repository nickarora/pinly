Pinly.Views.Header = Backbone.CompositeView.extend({
	
	template: JST['header/header'],
	className: 'header-container',

	initialize: function(){
		 $(window).on("resize", this.updateCSS.bind(this));
		 $(window).on('keypress', this.checkSearch.bind(this));
		 this.updateCSS({preventAnimate: true});

		 $.cloudinary.config({ cloud_name: 'pinly', api_key: '938513664846214'});
		 this.avatarSettings = { radius: "max", 
														width: 18, height: 18, 
														crop: "thumb", gravity: "face" };
	},

	events: {
		'click .current-user': 'showProfile',
		'click .logo': 'showHome',
		'blur .search': 'formHandler',
		'click .search-button': 'searchHandler',
	},

	searchHandler: function(event) {
		event.preventDefault();
		var searchTerms = this.$('.search').find('input').val();
		if (searchTerms == "") { 
			$(event.currentTarget).blur();
			return; 
		}

		Backbone.history.navigate('#/search/?' + searchTerms);
	},

	checkSearch: function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
    if( keycode == '13') {
  		$( ".search-button" ).trigger( "click" );
    }
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
		this.$('.search').tokenField({ regex: /\w+/, max: 6 });
		this.renderAvatar();
		this.updateCSS({ preventAnimate: true});
		return this;
	},

	renderAvatar: function(){
		var avatar = Pinly.CURRENT_USER.cloudinary_id;
		if (avatar){
			var $img = $.cloudinary.image(avatar, this.avatarSettings);
			this.$('.header-avatar').html($img);
		}	
	},

	updateCSS: function(options){
		var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var vpWidth = Math.ceil(vpWidth * 0.97);

		if (vpWidth >= 740) {
			if (!options.preventAnimate) {
				this.$el.animate( { width: this.getWidth() } , { duration:500, queue: false} );	
				this.$('.token-field').animate( { 'width': this.getWidth() - 340 }, { duration: 500, queue: false});
			} else {
				this.$el.css('width', this.getWidth());
				this.$('.token-field').css('width', this.getWidth() - 340);
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