Pinly.Views.PinBig = Backbone.CompositeView.extend({

	template: JST['pins/show_big'],

	className: 'full-screen-modal',

	initialize: function(options){
		this.model = options.model;
		this.pinner = options.pinner;
		this.boardpin = options.boardpin;
		this.board = options.board;

		this.listenTo(this.board, 'sync', this.render);
	},

	events: {
		'click': 'close'
	},

	open: function(){
		$('body').remove('.full-screen-modal');
		$('body').addClass('noscroll');
		$('body').prepend(this.render().$el);
	},

	close: function(){
		$('body').removeClass('noscroll');
		$('.full-screen-modal').remove();
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
		  pinner: this.pinner,
		  board: title
		});

		this.$el.html(renderedContent);
		this.renderImage();
		return this;
	},

	renderImage: function(){
		var $img = $.cloudinary.image(this.model.get('cloudinary_id'), { width: 470, height: 470, crop: 'fit' });
		this.$('.big-image').html($img)
	},

});