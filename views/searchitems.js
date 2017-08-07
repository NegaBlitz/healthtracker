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
      this.counter++;
      $(this.el).append("<li>hello world"+this.counter+"</li>");
    }
	})
	
	var searchItemView = new app.SearchItemView();
})(jQuery);