Pinly.Routers.Router = Backbone.Router.extend({
	
	initialize: function(options){
		this.$rootEl = options.$rootEl
	},

	routes: {
		"": 								'feed',
		"boards/new": 			'newBoard',
		"boards/:id": 			'showBoard',
		"boards/:id/edit": 	'editBoard',
		"users/:id": 				'showUser',
		"users/:id/edit": 	'editUser',
		"pins/new": 				'newPin'
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

	showBoard: function(id){
		var board = Pinly.Collections.boards.getOrFetch(id);

		var showBoardView = new Pinly.Views.BoardsShow({
			model: board
		})

		this._swapView(showBoardView);
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
	
		var userView = new Pinly.Views.UsersShow({
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

	newPin: function(){
		
		var pin = new Pinly.Models.Pin();
		
		var newPinView = new Pinly.Views.PinsForm({
		  collection: Pinly.Collections.pins,
		  model: pin
		});
		
		this._swapView(newPinView);
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});