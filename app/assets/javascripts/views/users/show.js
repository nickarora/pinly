Pinly.Views.UsersShow = Backbone.CompositeView.extend({
	
	template: JST['users/show'],

	className: 'users-show',

	events: {
		'click .edit-profile': 'editProfile'
	},

	initialize: function(){
		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.collection, 'add', this.addBoard);
		this.listenTo(this.collection, 'remove', this.removeBoard);

		this.collection.each(function(board){
			this.addBoard(board);
		}, this);

	},

	editProfile: function(event){
		event.preventDefault();
		Backbone.history.navigate('#/users/' + this.model.id + '/edit', {trigger: true});
	},

	removeBoard: function(board){
		var boardToRemove = board.id;
    var boardSubviews = this.subviews()['.boards-list'];
    var subviewToRemove = _.filter(boardSubviews, function(view) { return view.model.id == boardToRemove; } )[0];
    boardSubviews.splice(boardSubviews.indexOf(subviewToRemove), 1);
    this.render();
	},

	addBoard: function(board){
		var view = new Pinly.Views.BoardsItem({
      model: board
    });
    this.addSubview('.boards-list', view);
	},

	render: function(){
		
		var renderedContent = this.template({
		  boards: this.collection,
		  user: this.model,
		  logged_in: this.model.logged_in
		});

		this.$el.html(renderedContent);
		this.attachSubviews();

		return this;
	}

});