var app = app || {};

(function($){
	app.SearchItemView = Backbone.View.extend({
	
		el: $('.search'),
		
		events: {
      'click button#search-button': 'search'
    },
		
		initialize: function(){
      _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
       this.render(); // not all views are self-rendering. This one is.
			 this.counter = 0; // total number of items added thus far
    },
		
		render: function(){
    },
			
    search: function(){
			alert("You have searched for " + $('.search-input').val());
    }
	})
	
	var searchItemView = new app.SearchItemView();
})(jQuery);