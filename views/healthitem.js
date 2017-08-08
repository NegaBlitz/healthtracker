var app = app || {};

(function($){
	app.HealthItemView = Backbone.View.extend({
	
		tagName: 'li',
		className: 'health-item',
		
		initialize: function(){
      _.bindAll(this, 'render', 'remove'); // fixes loss of context for 'this' within methods
    },
		
		events: {
      'click button#delete': 'remove'
    },
		
		render: function(){
			$(this.el).html('<span class="health-item">' + this.model.get('name') +  ': ' + this.model.get('calories') + ' calories</span><button id="delete">Remove</button>');
			console.log("Render");
			return this;
    },
		
		remove: function(){
      $(this.el).remove();
      this.model.destroy();
			console.log(app.healthItems);
		}
	})
})(jQuery);