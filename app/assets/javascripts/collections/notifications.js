Pinly.Collections.Notifications = Backbone.Collection.extend({

	url: '/api/notifications',
	model: Pinly.Models.Notification
	
});

Pinly.Collections.notifications = new Pinly.Collections.Notifications();
