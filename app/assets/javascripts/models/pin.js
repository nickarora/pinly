Pinly.Models.Pin = Backbone.Model.extend({

	urlRoot: '/api/pins',

	validate: function (attributes) {
    if (!attributes || !attributes.url || 
    	   !Pinly.validationPatterns.url.test(attributes.url) ) {
      return "invalid url";
    }
  }

});