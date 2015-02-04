Pinly.Views.BoardsShow = Backbone.CompositeView.extend({
	
	template: JST['boards/show'],

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render)
		this.listenTo(this.model.pins(), 'add', this.addPin);
		this.listenTo(this.model.pins(), 'remove', this.removePin);

		this.model.pins().each(function(pin){
			this.addPin(pin);
		}, this);
	},

	addPin: function(pin){
		var view = new Pinly.Views.PinCardShow({
      model: pin
    });
    this.addSubview('.pins-list', view);
	},

	removePin: function(pin){
		var pinToRemove = pin.id;
    var pinSubViews = this.subviews()['.pins-list'];
    var subviewToRemove = _.filter(pinSubViews, function(view) { return view.model.id == pinToRemove; } )[0];
    pinSubViews.splice(pinSubViews.indexOf(subviewToRemove), 1);
    this.render();
	},

	render: function(){
		var renderedContent = this.template({
		  board: this.model
		});

		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	}

});