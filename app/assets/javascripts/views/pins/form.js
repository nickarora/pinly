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
		'change input.upload': 'upload',
		'drop .file-drop': 'uploadHandler',
		'dragover .file-drop': 'dragOver',
		'dragleave .file-drop': 'dragLeave'
	},

	dragOver: function(event){
		event.preventDefault();
		event.stopPropagation();
		this.$('.file-drop').css('background-color', '#A7E0F0');
		this.$('.file-drop').css('color', '#FFF');
	},

	dragLeave: function(event){
		event.preventDefault();
		event.stopPropagation();
		this.$('.file-drop').css('background-color', '#FFF');
		this.$('.file-drop').css('color', '#CCC');
	},

	uploadHandler: function(event){
    event.preventDefault();
    event.stopPropagation();

    var i = 0,
      files = event.originalEvent.dataTransfer.files,
      len = files.length;

    for (; i < len; i++) {
        this.storeFile(files[i]);
    }
	},

	upload: function (event) {
		var that = this;
	  var i = 0,
      files = event.target.files,
      len = files.length;

    for (; i < len; i++) {
      this.storeFile(files[i]);
    }
	},

	storeFile: function(file){
		var that = this;

    filepicker.store(
      file,
      {},
      function(blob){
      	that.model.set('image_url', blob.url);
      	that.$('.filename').html(blob.filename);
      	that.$('.upload-button').removeClass('btn-default');
      	that.$('.upload-button').addClass('btn-uploaded');
      	that.$('.file-drop').css('background-color', '#B4EC84');
      	that.$('.file-drop').css('color', '#FFF')
      },
      function(error) { console.log(error); },
      function(percent){
      	that.$('.progress-bar').attr('aria-valuenow', percent + '' );
      	that.$('.progress-bar').css('width', percent + '%');
      }
    );
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
		}

		this.attachSubviews();

		return this;
	}

});