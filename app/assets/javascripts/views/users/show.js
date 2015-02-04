Pinly.Views.UsersShow = Backbone.CompositeView.extend({
	
	template: JST['users/show'],

	className: 'users-show',

	events: {
		'click .edit-profile': 	'editProfile'
	},

	initialize: function(){

		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.boards(), 'add', this.addBoard);
		this.listenTo(this.model.boards(), 'remove', this.removeBoard);

		this.model.boards().each(function(board){
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
		  boards: this.model.boards(),
		  user: this.model,
		  logged_in: this.model.logged_in
		});

		this.$el.html(renderedContent);
		this.attachSubviews();

		return this;
	}

});