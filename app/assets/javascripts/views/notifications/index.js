Pinly.Views.NotificationIndex = Backbone.CompositeView.extend({

	template: JST['notifications/index'],

	initialize: function(){
		this.listenTo(this.collection, 'sync', this.render)
		this.listenTo(this.collection, 'add', this.addNotification);
		this.listenTo(this.collection, 'remove', this.removeNotification);
		
		this.collection.each(function(notification){
			this.addNotification(notification);
		}, this);
		
	},

	addNotification: function(notification){
		var view = new Pinly.Views.Notification({
      model: notification
    });
    this.addSubview('.notifications', view);
	},

	removeNotification: function(notification){
		var notificationToRemove = notification.id;
    var notificationSubviews = this.subviews()['.notifications'];
    var notificationToRemove = _.filter(notificationSubviews, function(view) { return view.model.id == notificationToRemove; } )[0];
    notificationSubviews.splice(notificationSubviews.indexOf(notificationToRemove), 1);
    this.render();
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	}

});