Pinly.Views.BoardsItem = Backbone.CompositeView.extend({

	template: JST['boards/boardsitem'],

	events: {
		'click .delete': 'removeBoard',
		'click .edit': 'editBoard',
		'click': 'showBoard'
	},

	initialize: function(options){
		this.listenTo(this.model, 'sync change', this.render);
		this.listenTo(this.model.follows(), 'add remove', this.render);
	},

	showBoard: function(event){
		Backbone.history.navigate("#/boards/" + this.model.id, { trigger: true });
	},

	removeBoard: function(event){
		event.preventDefault();
		event.stopPropagation();
		this.model.destroy();
	},

	editBoard: function(event){
		event.preventDefault();
		event.stopPropagation();
		Backbone.history.navigate('#/boards/' + this.model.id + '/edit', {trigger: true});
	},

	render: function(){
		var renderedContent = this.template({
		  board: this.model,
		  followMsg: this.getFollowMsg()
		});
		this.$el.html(renderedContent);
		return this;
	},

	getFollowMsg: function(){
		if (this.model.follows().length) {
			return 'Unfollow';
		} else {
			return 'Follow';
		}
	}

});
