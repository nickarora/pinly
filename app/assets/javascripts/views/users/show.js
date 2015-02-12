Pinly.Views.UsersShow = Backbone.CompositeView.extend({
	
	template: JST['users/show'],

	className: 'users-show',

	events: {
		'click .edit-profile': 	'editProfile',
		'click .sign-out': 'signOut'
	},

	initialize: function(){

		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.boards(), 'add', this.addBoard);
		this.listenTo(this.model.boards(), 'remove', this.removeBoard);

		$(window).on("resize", this.updateCSS.bind(this));

		this.model.boards().each(function(board){
			this.addBoard(board);
		}, this);

		this.avatarSettings = { radius: "max", 
														width: 64, height: 64, 
														crop: "thumb", gravity: "face" };

		// required for upload to cloudinary
		$.cloudinary.config({ cloud_name: 'pinly', api_key: '938513664846214'});
	},

	editProfile: function(event){
		event.preventDefault();

		var user = Pinly.Collections.users.getOrFetch(this.model.id);
		
		var editView = new Pinly.Views.UsersEdit({
			model: user
		});

		var modal = new Backbone.BootstrapModal({ 
			content: editView,
			style: 'modal-upload'
		}).open();
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

	signOut: function(event){
		
		event.preventDefault();
		$.ajax({
    	type: 'DELETE',
    	url: 'session',
	    success: function(result) {
	        window.location.href = "";
	    }
		});

	},

	render: function(){
		var renderedContent = this.template({
		  boards: this.model.boards(),
		  user: this.model
		});

		this.$el.html(renderedContent);
		this.updateCSS({preventAnimate: true});
		this.renderAvatar();
		this.attachSubviews();
		return this;
	},

	renderAvatar: function(){
		var avatar = this.model.get('cloudinary_id');
		if (avatar){
			var $img = $.cloudinary.image(avatar, this.avatarSettings);
			this.$('.avatar').html($img);
		}	
	},

	updateCSS: function(options){
		var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var vpWidth = Math.ceil(vpWidth * 0.97);
		if (vpWidth >= 740) {
			if (!options.preventAnimate) {
				this.$('.user-controls').animate( { width: this.getWidth() } , { duration:500, queue: false} );	
				this.$('.boards-list').animate( { width: this.getWidth() } , { duration:500, queue: false} );	
			} else {
				this.$('.user-controls').css('width', this.getWidth());
				this.$('.boards-list').css('width', this.getWidth());
			}
		}
	},

	getWidth: function(){
		var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var vpWidth = Math.ceil(vpWidth * 0.97);
		var numOfCols = Math.floor(vpWidth/245);
		return numOfCols * 245;
	}

});