Pinly.Views.PinsForm = Backbone.CompositeView.extend({

	template: JST['pins/form'],
	className: 'upload-pin',

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
		this.first_phase = true;

		$.cloudinary.config({ cloud_name: 'pinly', api_key: '938513664846214'});
	},

	events: {
		'submit .pin-form': 'submitHandler',
		'dragover .file-drop': 'dragOver',
		'dragleave .file-drop': 'dragLeave'
	},

	initCloudinary: function(){
		var that = this;

		this.$('.file-drop').html(
			$.cloudinary.unsigned_upload_tag("wsmemdnd", { 
				
				cloud_name: 'pinly'

			}).bind('cloudinarydone', function(e, data) {

				that.$('.file-drop').css('background-color', '#312c2d');
				that.$('.cloudinary_fileupload').css('background-color', '#312c2d');
				
				var picId = data.result.public_id;
				var $img = $.cloudinary.image( picId, { width: 364, height: 250, crop: 'fit' });
    		that.$('.file-drop').html($img);

    		that.model.set('image_url', data.result.url);
    		that.model.set('cloudinary_id', data.result.public_id);

			}).bind('cloudinaryprogress', function(e, data) { 
  			
  			that.$('.progress-bar').css('width', 
    			Math.round((data.loaded * 100.0) / data.total) + '%'); 
			})
		);
	},

	dragOver: function(event){
		event.preventDefault();
		event.stopPropagation();
		this.$('.file-drop').css('background-color', '#3498db');
	},

	dragLeave: function(event){
		event.preventDefault();
		event.stopPropagation();
		this.$('.file-drop').css('background-color', '#FFF');
	},

	submitHandler: function(event){
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

	render: function(){

		if (this.first_phase) {
			var renderedContent = this.template({
			  pin: this.model
			});

			this.$el.html(renderedContent);
			this.initCloudinary();
		}

		this.attachSubviews();

		return this;
	}

});