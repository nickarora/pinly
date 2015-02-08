Pinly.Collections.FeedPosts = Backbone.Collection.extend({
	
	url: '/api/feeds',
	model: Pinly.Models.FeedPost

});

Pinly.Collections.feedPosts = new Pinly.Collections.FeedPosts();