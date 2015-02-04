Pinly.Views.UsersEdit = Backbone.CompositeView.extend({
	template: JST['users/edit'],

	events: {
		'submit form': 'submitHandler'
	},

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render)
	},

	submitHandler: function(event){
		event.preventDefault();
		var that = this;

		var $target = $(event.currentTarget)
		var params = $target.serializeJSON();
		
		this.model.set(params);
		this.model.save({}, {
			success: function(){
				Backbone.history.navigate('#users/' + that.model.id, {trigger: true});
			}
		});
	},
	
	render: function(){
		var renderedContent = this.template({
		  user: this.model
		});

		this.$el.html(renderedContent);
		return this;
	}
});