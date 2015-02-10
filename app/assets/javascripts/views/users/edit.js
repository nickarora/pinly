Pinly.Views.UsersEdit = Backbone.CompositeView.extend({
	template: JST['users/edit'],

	events: {
		'submit .edit-profile': 'submitHandler',
		'dragover .file-drop-small': 'dragOver',
		'dragleave .file-drop-small': 'dragLeave'
	},

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render)
		$.cloudinary.config({ cloud_name: 'pinly', api_key: '938513664846214'});
	},

	dragOver: function(event){
		event.preventDefault();
		event.stopPropagation();
		this.$('.file-drop-small').css('background-color', '#3498db');
	},

	dragLeave: function(event){
		event.preventDefault();
		event.stopPropagation();
		this.$('.file-drop-small').css('background-color', '#FFF');
	},

	initCloudinary: function(){
		var that = this;

		this.$('.file-drop-small').html(
			$.cloudinary.unsigned_upload_tag("wsmemdnd", { 
				
				cloud_name: 'pinly'

			}).bind('cloudinarydone', function(e, data) {

				that.$('.file-drop-small').css('background-color', '#312c2d');
				that.$('.cloudinary_fileupload').css('background-color', '#312c2d');
				
				var picId = data.result.public_id;
				var $img = $.cloudinary.image( picId, {	radius: "max", 
																								width: 100, height: 100, 
																								crop: "thumb", gravity: "face" });
    		that.$('.file-drop-small').html($img);

    		that.model.set('image_url', data.result.url);
    		that.model.set('cloudinary_id', data.result.public_id);

			}).bind('cloudinaryprogress', function(e, data) { 
  			
  			that.$('.progress-bar').css('width', 
    			Math.round((data.loaded * 100.0) / data.total) + '%'); 
			})
		);
	},

	submitHandler: function(event){
		event.preventDefault();
		var that = this;

		var $target = $(event.currentTarget)
		var params = $target.serializeJSON();
		
		this.model.set(params["user"]);
		$('.modal').trigger('close-event');

		this.model.save({}, {
			success: function(){
				Backbone.history.navigate('#users/' + that.model.id, {trigger: true});
			}
		});
	},
	
	render: function(){
		var renderedContent = this.template({
		  user: this.model
		});

		this.$el.html(renderedContent);
		this.initCloudinary();
		return this;
	}
});