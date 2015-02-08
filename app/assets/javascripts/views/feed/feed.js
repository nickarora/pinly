Pinly.Views.Feed = Backbone.CompositeView.extend({
	
	template: JST['feed/feed'],
	className: 'feed',

	initialize: function(){
		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.collection, 'add', this.addPin);

		// no less than three columns
		$(window).on("resize", this.updateMasonry.bind(this));

		// required for upload to cloudinary
		$.cloudinary.config({ cloud_name: 'pinly', api_key: '938513664846214'});
	},

	addPin: function(feedPost){
		debugger
		var view = new Pinly.Views.PinCardShow({
      model: feedPost.pin(),
      des: feedPost.get('description'),
      pinner: feedPost.pinner,
      board: feedPost.board()
    });

    this.addSubview('.feed-list', view);
	},

	renderMasonry: function(){
		var $container = this.$('.feed-list');
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
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		this.attachSubviews();
		this.renderMasonry();

		this.$('.pins-list').imagesLoaded( function() {
  		that.renderMasonry();
		});

		return this;
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