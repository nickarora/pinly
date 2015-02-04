Pinly.Views.BoardsItem = Backbone.CompositeView.extend({

	template: JST['boards/boardsitem'],
	className: 'boards-item',

	events: {
		'click .delete': 'removeBoard',
		'click .edit': 'editBoard'
	},

	removeBoard: function(event){
		event.preventDefault();
		this.model.destroy();
	},

	editBoard: function(event){
		event.preventDefault();
		Backbone.history.navigate('#/boards/' + this.model.id + '/edit', {trigger: true});
	},

	render: function(){
		var renderedContent = this.template({
		  board: this.model
		});
		this.$el.html(renderedContent);
		return this;
	}

});
