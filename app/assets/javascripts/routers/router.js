Pinly.Routers.Router = Backbone.Router.extend({
	
	initialize: function(options){
		this.$rootEl = options.$rootEl;
		this.$headerEl = options.$headerEl;
	},

	routes: {
		"": 										'feed',
		"search/?*queryString": 'search',
		"boards/:id": 					'showBoard',
		"users/:id": 						'showUser'
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

	showUser: function(id){
		var user = Pinly.Collections.users.getOrFetch(id);
		
		var userView = new Pinly.Views.UsersShow({
			model: user
		});

		this._swapView(userView);
	},

	header: function(){
		var notifications = Pinly.Collections.notifications;
		notifications.fetch();
		var header = new Pinly.Views.Header({
			collection: notifications
		});
		return header;	
	},

	create: function(){
		var create = new Pinly.Views.CreateIcon();
		return create;
	},

	help: function(){
		var help = new Pinly.Views.HelpIcon();
		return help;
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this.header().remove();
		this.create().remove();

		this._currentView = view;
		this.$headerEl.html(this.header().render().$el);
		this.$rootEl.html(view.render().$el);
		this.$rootEl.append(this.create().render().$el);
		this.$rootEl.append(this.help().render().$el);

		if (!Pinly.initialTourComplete){
			Pinly.initialTourComplete = true;
			$( ".help" ).trigger( "click" );
		}
	}
});