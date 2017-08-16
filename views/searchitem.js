var app = app || {};

(function($){
	app.SearchItemView = Backbone.View.extend({
	
		tagName: 'li',
		
		initialize: function(){
      _.bindAll(this, 'render', 'addToDiet'); // fixes loss of context for 'this' within methods
    },
		
		events: {
      'click span.search-item': 'addToDiet'
    },
		
		render: function(){
			$(this.el).html('<span class="search-item">'+ this.model.get('name') +  ': ' + this.model.get('calories') + ' calories</span>');
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
			modelClone.save();
			
			// Logs the current list of healthItems
			console.log(app.healthItems);
			
			// Clears the list as specified
			app.searchItems.reset();
			$(".results-list").text("");
		}
	})
})(jQuery);