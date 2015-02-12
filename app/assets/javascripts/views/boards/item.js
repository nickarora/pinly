Pinly.Views.BoardsItem = Backbone.CompositeView.extend({

	template: JST['boards/boardsitem'],

	className: 'board-item-wrapper',

	events: {
		'click .delete': 'removeBoard',
		'click .edit': 'editBoard',
		'click .boards-item': 'showBoard',
		'click .follow-board-item': 'followHandler'
	},

	initialize: function(options){
		this.listenTo(this.model, 'sync change', this.render);
		this.listenTo(this.model.follows(), 'add remove', this.render);
	},

	followHandler: function(event){
		event.preventDefault();
		event.stopPropagation();
		var that = this;

		if ( this.model.follows().length ) {
			var follow = this.model.follows().first();
			follow.destroy({
				success: function(){
					that.model.follows().remove(follow);			
				}
			});
		} else {
			var follow = new Pinly.Models.Follow();
			follow.set('user_id', Pinly.CURRENT_USER.id);
			follow.set('board_id', this.model.id);
			follow.save({}, {
				success: function(){
					that.model.follows().add(follow);
				}
			});
		}
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

		var board = Pinly.Collections.boards.getOrFetch(this.model.id);

		var editBoardView = new Pinly.Views.BoardsForm({
		  collection: Pinly.Collections.boards,
		  model: board
		});

		var modal = new Backbone.BootstrapModal({ 
			content: editBoardView,
			style: 'modal-upload'
		}).open();
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
