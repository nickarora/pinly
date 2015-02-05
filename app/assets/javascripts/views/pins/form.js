Pinly.Views.PinsForm = Backbone.CompositeView.extend({

	template: JST['pins/form'],
	className: 'upload-pin',

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
		this.first_phase = true;
		this.filename = null;
	},

	events: {
		'submit .pin-form': 'submitHandler',
		'click .upload': 'upload'
	},

	submitHandler: function(event){
		console.log('triggered phase 1');
		event.preventDefault();
		var that = this;

		var $target = $(event.currentTarget)
		var params = $target.serializeJSON();
		this.model.set(params["pin"]);
		
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

	upload: function (event) {
		var that = this;
	  
	  filepicker.pick({
	  	mimetype: "image/*"
	  },
	  function(blob){
	  	that.model.set('image_url', blob.url);
	  	this.$('.upload').removeClass('btn-danger');
	  	this.$('.upload').addClass('btn-success');
	  	this.$('.filename').html(blob.filename);
	  });
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