Pinly.Views.PinCardShow = Backbone.CompositeView.extend({
	
	template: JST['pins/show_card'],

	className: 'pin-child',

	initialize: function(options) {
		this.model = options.model;
		this.pinner = options.pinner;
		this.des = options.des;
		this.board = options.board;

		this.listenTo(this.board, 'sync', this.render);
	},

	render: function(){

		var matches = this.model.get('url').match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
		var dom = matches && matches[1];
		var shortDom = dom && dom.replace(/^www\./,'');

		var title = this.board ? this.board.get('title') : null;

		var renderedContent = this.template({
		  pin: this.model,
		  dom: shortDom,
		  description: this.des,
		  pinner: this.pinner,
		  board: title
		});

		this.$el.html(renderedContent);
		this.renderImage();

		return this;
	},

	renderImage: function(){
		var $img = $.cloudinary.image(this.model.get('cloudinary_id'), { width: 235, crop: 'fit' });
		this.$('.enlarge-pin').html($img)
	}

});