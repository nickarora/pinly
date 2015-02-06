Pinly.Views.CreateIcon = Backbone.CompositeView.extend({

	template: JST['header/create'],

	initialize: function() {
		$(':not(.drop-up)').click(this.hideMenu.bind(this));
	},

	events: {
		'click .plus': 'showMenu',
	},

	showMenu: function(event){
		event.preventDefault();
		event.stopPropagation();
		var menuSubviews = this.subviews()['.menu-options'];
		if (menuSubviews && menuSubviews.length) { return; }
		var view = new Pinly.Views.DropUp();
    this.addSubview('.menu-options', view);
	},

	hideMenu: function(event){
		var subviews = this.subviews()['.menu-options'];
		if (!subviews || !subviews.length) { return; }
		var subviews = this.subviews()['.menu-options'];
		var menuToRemove = this.subviews()['.menu-options'][0];
    subviews.splice(subviews.indexOf(menuToRemove), 1);
    this.render();
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	}

});