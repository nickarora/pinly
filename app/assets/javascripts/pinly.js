window.Pinly = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new Pinly.Routers.Router({
  		$rootEl: $("#content")
  	});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  Pinly.initialize();
});
