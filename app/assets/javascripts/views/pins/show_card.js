Pinly.Views.PinCardShow = Backbone.CompositeView.extend({
	
	template: JST['pins/show_card'],

	render: function(){

		var matches = this.model.get('url').match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
		var dom = matches && matches[1];
		var shortDom = dom && dom.replace(/^www\./,'');

		var renderedContent = this.template({
		  pin: this.model,
		  dom: shortDom
		});

		this.$el.html(renderedContent);
		return this;
	}


});