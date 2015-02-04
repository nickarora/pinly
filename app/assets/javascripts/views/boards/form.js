Pinly.Views.BoardsForm = Backbone.CompositeView.extend({

	template: JST['boards/form'],

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	events: {
		'submit form': 'submitHandler'
	},

	submitHandler: function(event){
		event.preventDefault();
		var that = this;

		var $target = $(event.currentTarget)
		var params = $target.serializeJSON();
		
		this.model.set(params);
		this.model.save({}, {
			success: function(){
				Pinly.Collections.boards.add(that.model, { merge: true });
				Backbone.history.navigate("#/boards/" + that.model.id, {trigger: true});
			}
		});
	},

	render: function(){
		var renderedContent = this.template({
		  board: this.model
		});

		this.$el.html(renderedContent);
		return this;
	}

});