Pinly.Collections.FeedPosts = Backbone.Collection.extend({
	
	url: '/api/feeds',
	model: Pinly.Models.FeedPost,
	
	parse: function(payload) {
    
		if (payload.page){
			this.page = payload.page;	
			delete payload.page;	
		}
		
		if (payload.total_pages){
			this.total_pages = payload.total_pages;
			delete payload.total_pages;
		}
    return payload.members;
  }

});

Pinly.Collections.feedPosts = new Pinly.Collections.FeedPosts();