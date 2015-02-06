Pinly.Views.DropUp = Backbone.CompositeView.extend({

	template: JST['header/dropup'],

	events: {
		'click .new-upload-pin': 'newUploadPin',
		'click .new-board': 'newBoard'
	},

	newUploadPin: function(){
		var pin = new Pinly.Models.Pin();
		
		var newPinView = new Pinly.Views.PinsForm({
		  collection: Pinly.Collections.pins,
		  model: pin
		});

		var modal = new Backbone.BootstrapModal({ 
			content: newPinView,
			style: 'modal-upload'
		}).open();
	},

	newBoard: function(){
		var board = new Pinly.Models.Board();
		
		var newBoardView = new Pinly.Views.BoardsForm({
		  collection: Pinly.Collections.boards,
		  model: board
		});

		var modal = new Backbone.BootstrapModal({ 
			content: newBoardView,
			style: 'modal-board'
		}).open();
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	}

});