Pinly.Views.Feed = Backbone.CompositeView.extend({
	
	template: JST['feed/feed'],
	className: 'feed',

	initialize: function(options){

		this.collection.reset();
		this.listenTo(this.collection, 'sync', this.syncHandler);
		this.listenTo(this.collection, 'add', this.addPin);
		
		// get more pages if need be
		$(window).on('scroll', this.scrollHandler.bind(this));

		// no less than three columns
		$(window).on("resize", this.updateMasonry.bind(this));

		// required for upload to cloudinary
		$.cloudinary.config({ cloud_name: 'pinly', api_key: '938513664846214'});

	},

	syncHandler: function(e){
		this.fadeInCards();
	},

	scrollHandler: function(event){
		event.preventDefault();
		
		if (document.body.scrollHeight >= 
	      Math.floor((.75 * (document.body.scrollTop + window.innerHeight)))  ) 
			{

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
      board: feedPost.board(),
      user: feedPost.user(),
      pinner: feedPost.pinner
    });

    this.addSubview('.feed-list', view);
    this.attachSubview('.feed-list', view);
    $('.feed-list').masonry('appended', view.$el);
	},

	renderMasonry: function(){
		var $container = $('.feed-list');
			
		$container.masonry({
			columnWidth: 235,
			"gutter": 15,
			"isFitWidth": true,
		  itemSelector: '.pin-child',
		  transitionDuration: '.4s'
		});
	},

	fadeInCards: function(){
		var that = this;

		var $container = this.$('.feed-list');

		$container.imagesLoaded(function(){
			that.renderMasonry();
		})
	},

	render: function(){
		var that = this;
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		this.attachSubviews();
		this.renderMasonry();
		return this;
	},

	updateMasonry: function(){
		var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var vpWidth = Math.ceil(vpWidth * 0.97);

		if (vpWidth < 740){
			$('.feed-list').masonry('unbindResize');
		} else {
			$('.feed-list').masonry('bindResize');
		}
	}

});