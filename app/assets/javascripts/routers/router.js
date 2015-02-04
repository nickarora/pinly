Pinly.Routers.Router = Backbone.Router.extend({
	
	initialize: function(options){
		this.$rootEl = options.$rootEl
	},

	routes: {
		"": 								'feed',
		"boards/new": 			'newBoard',
		"boards/:id/edit": 	'editBoard',
		"users/:id": 				'showUser',
		"users/:id/edit": 	'editUser'

	},

	feed: function(){
		var feedView = new Pinly.Views.Feed();
		this._swapView(feedView);
	},

	newBoard: function(){
		var board = new Pinly.Models.Board();
		
		var newBoardView = new Pinly.Views.BoardsForm({
		  collection: Pinly.Collections.boards,
		  model: board
		});
		
		this._swapView(newBoardView);
	},

	editBoard: function(id){

		var board = Pinly.Collections.boards.getOrFetch(id);

		var editBoardView = new Pinly.Views.BoardsForm({
		  collection: Pinly.Collections.boards,
		  model: board
		});

		this._swapView(editBoardView);
	},

	showUser: function(id){
		var user = Pinly.Collections.users.getOrFetch(id);
		var collection = user.boards();
		collection.fetch();
	
		var userView = new Pinly.Views.UsersShow({
			collection: collection,
			model: user
		});

		this._swapView(userView);
	},

	editUser: function(id){
		var user = Pinly.Collections.users.getOrFetch(id);

		var editView = new Pinly.Views.UsersEdit({
			model: user
		});

		this._swapView(editView);		
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});