Pinly.Views.BoardPinsForm = Backbone.CompositeView.extend({

	template: JST['boardpins/form'],

	initialize: function(options){
		this.pin_id = options.pin_id;

		this.boards = new Pinly.Collections.Boards();
		this.boards.fetch();

		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.boards, 'sync', this.render);
	},

	events: {
		'submit .boardpin-form': 'submitHandler'
	},

	submitHandler: function(event){
		console.log('triggered phase 2');
		event.preventDefault();
		var that = this;

		var $target = $(event.currentTarget)
		var params = $target.serializeJSON();
		params.boardpin.pin_id = this.pin_id;

		this.model.set(params);
		debugger
		$('.modal').trigger('close-event');
		
		this.model.save({}, {
			success: function(){
				Pinly.Collections.boardpins.add(that.model, { merge: true });
		   	Backbone.history.navigate("#/boards/" + that.model.get('board_id'), {trigger: true});
			}
		});
	},

	render: function(){
		var renderedContent = this.template({
		  boardpin: this.model,
		  boards: this.boards
		});

		this.$el.html(renderedContent);
		return this;
	}

});