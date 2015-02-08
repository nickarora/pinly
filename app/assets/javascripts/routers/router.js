Pinly.Routers.Router = Backbone.Router.extend({
	
	initialize: function(options){
		this.$rootEl = options.$rootEl;
		this.$headerEl = options.$headerEl;
	},

	routes: {
		"": 								'feed',
		"boards/:id": 			'showBoard',
		"boards/:id/edit": 	'editBoard',
		"users/:id": 				'showUser',
		"users/:id/edit": 	'editUser'
	},

	feed: function(){
		var feedView = new Pinly.Views.Feed();
		this._swapView(feedView);
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

	header: function(){
		var header = new Pinly.Views.Header();
		return header
	},

	create: function(){
		var create = new Pinly.Views.CreateIcon();
		return create;
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$headerEl.html(this.header().render().$el);
		this.$rootEl.html(view.render().$el);
		this.$rootEl.append(this.create().render().$el);
	}
});