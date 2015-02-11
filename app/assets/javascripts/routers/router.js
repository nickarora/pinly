Pinly.Routers.Router = Backbone.Router.extend({
	
	initialize: function(options){
		this.$rootEl = options.$rootEl;
		this.$headerEl = options.$headerEl;
	},

	routes: {
		"": 										'feed',
		"search/?*queryString": 'search',
		"boards/:id": 					'showBoard',
		"boards/:id/edit": 			'editBoard',
		"users/:id": 						'showUser',
		"notifications": 				'notificationIndex'
	},

	feed: function(){

		var feed = Pinly.Collections.feedPosts.fetch({
			remove: false,
    	data: { page: 1 }
		});

		var feedView = new Pinly.Views.Feed({
		  collection: Pinly.Collections.feedPosts
		});
		
		this._swapView(feedView);
	},

	search: function(queryString){

		var feed = Pinly.Collections.feedPosts.fetch({
			remove: false,
    	data: { page: 1,
    					queryString: queryString }
		});

		var feedView = new Pinly.Views.Feed({
		  collection: Pinly.Collections.feedPosts
		});
		
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

	notificationIndex: function(){

		var notifications = Pinly.Collections.notifications;
		notifications.fetch();

		var notificationView = new Pinly.Views.NotificationIndex({
			collection: notifications
		});

		this._swapView(notificationView);

	},

	header: function(){
		var notifications = Pinly.Collections.notifications;
		var header = new Pinly.Views.Header({
			collection: notifications
		});
		return header;	
	},

	create: function(){
		var create = new Pinly.Views.CreateIcon();
		return create;
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this.header().remove();
		this.create().remove();

		this._currentView = view;
		this.$headerEl.html(this.header().render().$el);
		this.$rootEl.html(view.render().$el);
		this.$rootEl.append(this.create().render().$el);
	}
});