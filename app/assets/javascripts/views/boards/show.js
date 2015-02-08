Pinly.Views.BoardsShow = Backbone.CompositeView.extend({
	
	template: JST['boards/show'],

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.boardpins(), 'add', this.addPin);
		this.listenTo(this.model.pins(), 'remove', this.removePin);
		
		$(window).on("resize", this.updateMasonry.bind(this));
		$.cloudinary.config({ cloud_name: 'pinly', api_key: '938513664846214'});
	},

	events: {
		'click .follow': 'followHandler'
	},

	followHandler: function(){
		var that = this;

		if (this.model.follow) {
			this.model.follow.destroy({
				success: function(){
					that.model.follow = null;
					that.render();
				}
			});
		} else {
			var follow = new Pinly.Models.Follow();
			follow.set('user_id', Pinly.CURRENT_USER.id);
			follow.set('board_id', this.model.id);
			follow.save({}, {
				success: function(){
					that.model.follow = follow;
					that.render();
				}
			});
		}
	},

	addPin: function(boardpin){
		var pin = _.find(this.model.pins().models, function(p){
			return boardpin.get('pin_id') == p.get('id');
		});

		var view = new Pinly.Views.PinCardShow({
      model: pin,
      des: boardpin.get('description'),
      pinner: this.model.pinner,
      board: this.model
    });

    this.addSubview('.pins-list', view);
	},

	removePin: function(pin){
		var pinToRemove = pin.id;
    var pinSubViews = this.subviews()['.pins-list'];
    var subviewToRemove = _.filter(pinSubViews, function(view) { return view.model.id == pinToRemove; } )[0];
    pinSubViews.splice(pinSubViews.indexOf(subviewToRemove), 1);
    this.render();
	},

	renderMasonry: function(){

		var $container = this.$('.pins-list');
		
		$container.masonry({
			columnWidth: 235,
			"gutter": 10,
			"isFitWidth": true,
		  itemSelector: '.pin-child',
		  transitionDuration: 0
		});
	},

	render: function(){
		var that = this;

		var renderedContent = this.template({
		  board: this.model,
		  followMsg: this.getFollowMsg()
		});

		this.$el.html(renderedContent);
		this.attachSubviews();
		this.renderMasonry();

		this.$('.pins-list').imagesLoaded( function() {
  		that.renderMasonry();
		});

		return this;
	},

	getFollowMsg: function(){
		if (this.model.follow) {
			return 'Unfollow';
		} else {
			return 'Follow';
		}
	},

	updateMasonry: function(){
		var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var vpWidth = Math.ceil(vpWidth * 0.97);

		if (vpWidth < 740){
			$('.pins-list').masonry('unbindResize');
		} else {
			$('.pins-list').masonry('bindResize');
		}
	}

});