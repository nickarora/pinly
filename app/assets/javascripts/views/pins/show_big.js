Pinly.Views.PinBig = Backbone.CompositeView.extend({

	template: JST['pins/show_big'],

	className: 'full-screen-modal',

	initialize: function(options){
		$(window).on('keyup', this.checkKeypress.bind(this));

		this.model = options.model;
		this.pinner = options.pinner;
		this.boardpin = options.boardpin;
		this.board = options.board;
		this.user = options.user;

		this.listenTo(this.board, 'sync', this.render);
		this.listenTo(this.boardpin.comments(), 'add', this.addComment);
		this.listenTo(this.boardpin.liked(), 'add remove', this.updateLikeIconColor);
		
		this.boardpin.comments().each(function(comment){
			this.addComment(comment);
		}, this);

	},

	events: {
		'click .cancel-modal': 'close',
		'submit .comment-form': 'commentHandler',
		'mouseenter .left': 'showFromText',
		'mouseleave .left': 'hideFromText',
		'click .like': 'likeHandler',
		'click .pin': 'pinHandler'
	},

	showFromText: function(){
		this.$( ".backdrop-text" ).show( "slide", 250 );
	},

	hideFromText: function(){
		this.$( ".backdrop-text" ).hide( "slide", 250 );
	},

	addComment: function(comment){
		var view = new Pinly.Views.Comment({
      model: comment
    });

    this.addSubview('.comments', view);
	},

	commentHandler: function(event){
		
		event.preventDefault();
		var that = this;

		$target = $(event.currentTarget);
		var params = $target.serializeJSON();
		var comment = new Pinly.Models.Comment();

		comment.set('boardpin_id', this.boardpin.id);
		comment.set('user_id', Pinly.CURRENT_USER.id);
		comment.set(params["comment"]);


		comment.save({}, {
			success: function(result){
				result.user().set(Pinly.CURRENT_USER);
				that.boardpin.comments().add(result);

				/* send notification */
				var notif = new Pinly.Models.Notification();
				debugger
				notif.save({
					message: Pinly.CURRENT_USER.fname + " " + Pinly.CURRENT_USER.lname + " commented on your post!",
					boardpin_id: that.boardpin.id,
					user_id: Pinly.CURRENT_USER.id,
					receiver_id: that.user.id
				});
				/* --- */
			}
		});
	},

	checkKeypress: function(event){

		var keycode = (event.keyCode ? event.keyCode : event.which);
    if( keycode == '27') {
  		$( ".cancel-modal" ).trigger( "click" );
    }
	},

	open: function(){
		$('body').remove('.full-screen-modal');
		$('body').addClass('noscroll');
		$('body').prepend(this.render().$el);
	},

	close: function(){
		$('body').removeClass('noscroll');
		$('.full-screen-modal').remove();
		$(window).off('keyup');
	},

	parseUrl: function(){
		var matches = this.model.get('url').match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
		var dom = matches && matches[1];
		return dom && dom.replace(/^www\./,'');
	},

	render: function(){
		var shortDom = this.parseUrl();

		var renderedContent = this.template({
		  pin: this.model,
		  dom: shortDom,
		  description: this.boardpin.get('description'),
		  pinner: this.pinner,
		  board: this.board,
		  user: this.user
		});

		this.$el.html(renderedContent);
		this.renderImage();
		this.attachSubviews();
		this.updateLikeIconColor();
		return this;
	},

	updateLikeIconColor: function(){
		if (this.boardpin.liked().length){
			this.$('.like').css('color', '#cb2026');
		} else {
			this.$('.like').css('color', '#5d5d5d');
		}
	},

	likeHandler: function(event){
		event.preventDefault();
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
		this.close();
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

	renderImage: function(){
		var $img = $.cloudinary.image(this.model.get('cloudinary_id'), { width: 470, height: 470, crop: 'fit' });
		this.$('.big-image').html($img);
	}

});