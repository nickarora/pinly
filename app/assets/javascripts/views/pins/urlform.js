Pinly.Views.UrlPin = Backbone.CompositeView.extend({
	
	template: JST['pins/urlform'],

	events: {
		'submit .url-form': 'submitHandler',
		'click .picture-selector img': 'savePin'
	},

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
		this.first_phase = true;
	},

	submitHandler: function(){
		event.preventDefault();
		var that = this;
		var $target = $(event.target);
		var params = $target.serializeJSON();	
		this.model.set(params);

		//scrape website for images, display in subview.
		$.embedly.defaults.key = "a9324960c7e4437b8739c968a52c20ae";
    $.embedly.extract(params.url).progress(function(data) {
    	
    	var images = data.images
    	var $container = $('<div>');

    	_.each(images, function(image){
    		var img_url = $.embedly.display.resize(image.url, {query: {height: 200, width: 354}});
    		var $img = $('<img>');
    		$img.attr('data-og-url', image.url);
    		$img.attr('src', img_url)
    		$container.append($img);
    	})

    	that.$('.picture-selector').html($container);
    });
	},

	savePin: function(event) {
		var that = this;
		var img_url = $(event.currentTarget).attr('data-og-url');
		this.model.set('image_url', img_url);

		this.model.save({}, {
			success: function(){
				Pinly.Collections.pins.add(that.model, { merge: true });
				that.addNextForm();
			}
		});
	},

	addNextForm: function(){
		var boardpin = new Pinly.Models.BoardPin();

		var view = new Pinly.Views.BoardPinsForm({
      model: boardpin,
      pin_id: this.model.id
    });

		this.first_phase = false;
		this.$('.form-content').empty();
    this.addSubview('.form-content', view);
	},


	render: function(){

		if (this.first_phase) {
			var renderedContent = this.template({
			  pin: this.model
			});
			this.$el.html(renderedContent);
		}

		this.attachSubviews();

		return this;
	}

});