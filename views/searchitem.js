var app = app || {};

(function($){
	app.SearchItemView = Backbone.View.extend({
	
		tagName: 'li',
		className: 'search-item',
		
		initialize: function(){
      _.bindAll(this, 'render', 'addToDiet'); // fixes loss of context for 'this' within methods
    },
		
		events: {
      'click button.add-to-diet': 'addToDiet'
    },
		
		render: function(){
			$(this.el).html('<span>'+ this.model.get('name') +  ': ' + this.model.get('calories') + ' calories</span><button class="add-to-diet">Add to Diet</button>');
			return this;
    },
		
		// Convert this object to a health item model, and place it into the health item view
		addToDiet: function(){
			var modelClone = this.model.clone();
	
			app.healthItems.add(modelClone);
      
			// Removes element from list
			// $(this.el).remove();
			
      // Destroys the model
			// this.model.destroy();
			
			healthListView.appendItem(modelClone);
			
			// Logs the current list of healthItems
			console.log(app.healthItems);
		}
	})
})(jQuery);