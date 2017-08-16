var app = app || {};

(function($){
	app.SearchListView = Backbone.View.extend({
	
		el: $('.search'),
		
		events: {
      'click button#search-button': 'search',
      'click button#clear-button': 'clear'
    },
		
		initialize: function(){
      _.bindAll(this, 'render', 'appendItem'); // fixes loss of context for 'this' within methods
      this.render(); // not all views are self-rendering. This one is.
    },
		
		render: function(){
    },
			
    search: function(){
			// Var for callback
			var self = this;
			
			// Wipe out the search list
			app.searchItems.reset();
			
			var searchQuery = $('.search-input').val();
			
			// Nutritionix AJAX
			
			// Url for the request
			var nutritionixUrl = "https://api.nutritionix.com/v1_1/search/" + searchQuery + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=c93a45c0&appKey=6f2acd4dcc292ed9e0996893f4510d2f"
			
			// Shows that nutritionix is loading
			$(".results-list").text("Loading...");
			
			// Get the data
			$.getJSON(nutritionixUrl,function(){})
			.done(function(data) {
				$(".results-list").text("");
				var hits = data.hits;
				console.log(hits);
				
				for(i = 0; i < hits.length; i++) {
					// Get this item and render it directly
					// var item = (hits[i].fields.brand_name + " " + hits[i].fields.item_name + ": \n" + hits[i].fields.nf_calories + " Calories");
					// $(".results-list").append("<p>" + item + "</p>");
					
					// Iterate through each item and convert it into a model
					var searchResult = new app.HealthItem({
						name: hits[i].fields.brand_name + " " + hits[i].fields.item_name,
						calories: hits[i].fields.nf_calories,
					});
				
					// Add this object to search items
					app.searchItems.add(searchResult);
					
					// Append and render this item
					self.appendItem(searchResult);
					
				}
				
				if(hits.length <= 0) {
					$(".results-list").append("<p>Your search returned no results.</p>");
				}
				console.log(app.searchItems);
			})
			.fail(function(e) {
				alert("Something happened with Nutritionix, please try again later.");
				$(".results-list").text("");
			});
    },
	
		appendItem: function(item) {
			var itemView = new app.SearchItemView({
        model: item
      });
      $(".results-list").append(itemView.render().el);
		},
		
		clear: function(){
			// Wipe out the search list
			app.searchItems.reset();
			$(".results-list").text("");
		},
	})
	
	var searchListView = new app.SearchListView();
})(jQuery);