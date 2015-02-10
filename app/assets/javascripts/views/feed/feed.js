Pinly.Views.Feed = Backbone.CompositeView.extend({
	
	template: JST['feed/feed'],
	className: 'feed',

	initialize: function(options){

		if (options.search){
			this.collection = options.collection;
			this.collection.reset();
		}
		
		this.listenTo(this.collection, 'sync add', this.render);
		this.listenTo(this.collection, 'add', this.addPin);

		this.collection.each(function(pin){
			this.addPin(pin);
		}, this);
		
		// get more pages if need be
		$(window).on('scroll', this.scrollHandler.bind(this));

		// no less than three columns
		$(window).on("resize", this.updateMasonry.bind(this));

		// required for upload to cloudinary
		$.cloudinary.config({ cloud_name: 'pinly', api_key: '938513664846214'});

	},

	scrollHandler: function(event){
		event.preventDefault();
		
		if (document.body.scrollHeight == 
	      document.body.scrollTop +        
	      window.innerHeight) {

      if (this.collection.page < this.collection.total_pages) {
        this.collection.page++;
        this.collection.fetch({
          remove: false,
          data: { page: this.collection.page }
        });
    	}
		}

	},

	addPin: function(feedPost){
		var view = new Pinly.Views.PinCardShow({
      model: feedPost.pin(),
      boardpin: feedPost,
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
		  transitionDuration: 0,
		});
	},

	fadeInCards: function(){
		var that = this;
		$('.pin-child').imagesLoaded().progress(function( imgLoad, image){		
			var $pin = $(image.img).parents('.pin-child');
			$pin.find('.card').animate({opacity: 1});
			that.renderMasonry();
		});
	},

	render: function(){
		var that = this;
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		this.attachSubviews();
		this.renderMasonry();
		this.fadeInCards();
		this.$(".pin-description").dotdotdot();
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