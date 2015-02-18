Pinly.Views.PinCardShow = Backbone.CompositeView.extend({
	
	template: JST['pins/show_card'],

	className: 'pin-child',

	initialize: function(options) {
		this.model = options.model;
		this.boardpin = options.boardpin;
		this.board = options.board;
		this.user = options.user;
		this.pinner = options.pinner;

		this.listenTo(this.board, 'sync', this.render);
		this.listenTo(this.boardpin.liked(), 'add remove', this.updateLikeIcon);

		this.avatarSettings = { radius: "max", 
														width: 34, height: 34, 
														crop: "thumb", gravity: "face" };
	},

	events: {
		'click .enlarge-pin': 'biggify',
		'mouseenter .image-area': 'showButton',
		'mouseleave .image-area': 'hideButton',
		'click .pin-button': 'pinHandler',
		'click .like-button': 'likeHandler',
		'click .pinner': 'viewSource'
	},

	showButton: function(){
		if (this.board.user().get('id') != Pinly.CURRENT_USER.id) {
			this.$('.pin-button').css('display', 'block');
			this.$('.like-button').css('display', 'block');
		}
	},

	hideButton: function(){
		this.$('.pin-button').css('display', 'none');
		this.$('.like-button').css('display', 'none');
	},

	viewSource: function(){
		Backbone.history.navigate("#/boards/" + this.board.get('id'), {trigger: true});
	},

	likeHandler: function(event){
		event.preventDefault();
		$(event.currentTarget).blur();
		var that = this;

		if ( this.boardpin.liked().length ) {
			var like = this.boardpin.liked().first();
			this.boardpin.numLiked -= 1;
			like.destroy({
				success: function(){
					that.boardpin.liked().remove(like);
				}
			});
		} else {
			var like = new Pinly.Models.Like();
			like.set('user_id', Pinly.CURRENT_USER.id);
			like.set('boardpin_id', this.boardpin.id);
			this.boardpin.numLiked += 1;
			like.save({}, {
				success: function(){
					that.boardpin.liked().add(like);

					/* send notification */
					var notif = new Pinly.Models.Notification();
					notif.save({
						message: Pinly.CURRENT_USER.fname + " " + Pinly.CURRENT_USER.lname + " liked your post!",
						boardpin_id: that.boardpin.id,
						user_id: Pinly.CURRENT_USER.id,
						receiver_id: that.user.id
					});
					/* --- */
				}
			});
		}

	},

	pinHandler: function(event){
		event.preventDefault();

		var boardpin = new Pinly.Models.BoardPin();
		var view = new Pinly.Views.BoardPinsForm({
      model: boardpin,
      pin_id: this.model.id
    });

    var modal = new Backbone.BootstrapModal({ 
			content: view,
			style: 'modal-upload'
		}).open();
	},

	parseUrl: function(){
		var matches = this.model.get('url').match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
		var dom = matches && matches[1];
		return dom && dom.replace(/^www\./,'');
	},

	render: function(){
		var shortDom = this.parseUrl();
		var title = this.board ? this.board.get('title') : null;

		var renderedContent = this.template({
		  pin: this.model,
		  dom: shortDom,
		  description: this.boardpin.get('description'),
		  numLiked: this.boardpin.numLiked,
		  pinner: this.pinner,
		  board: title
		});

		this.$el.html(renderedContent);
		this.renderImage();
		this.renderAvatar();
		this.updateLikeIconColor();

		// great script but incompatible with firefox!
		// this.$(".pin-description").dotdotdot();

		return this;
	},

	updateLikeIconColor: function(){
		if (this.boardpin.liked().length){
			this.$('.like-button').css('color', '#cb2026');
		} else {
			this.$('.like-button').css('color', '#5d5d5d');
		}
	},

	updateLikeIconCount: function(){
		if (this.boardpin.numLiked) {
			var $tag = $('<p></p>');
			var $heart = $('<i class="fa fa-heart red"></i>');
			var $num = $('<span class="like-count-num"></span>')
			
			$num.text(this.boardpin.numLiked);
			$tag.append($heart);
			$tag.append(" ");
			$tag.append($num);

			this.$('.like-count').html($tag);
		} else {
			this.$('.like-count').empty();
		}
	},

	updateLikeIcon: function(){
		this.updateLikeIconColor();
		this.updateLikeIconCount();
	},

	renderImage: function(){
		var $img = $.cloudinary.image(this.model.get('cloudinary_id'), { width: 235, crop: 'fit' });
		this.$('.enlarge-pin').html($img);
	},

	renderAvatar: function(){
		var $link = $('<a>')
		$link.attr('href', '#/users/' + this.user.id);
		var $img = $.cloudinary.image(this.user.get('cloudinary_id'), this.avatarSettings );
		$link.html($img);
		this.$('.card-avatar').html($link);
	},

	biggify: function(event) {
		event.preventDefault();

		var view = new Pinly.Views.PinBig({
		  model: this.model,
			pinner: this.pinner,
			boardpin: this.boardpin, 
			board: this.board,
			user: this.user,
		});

		view.open();
	}

});