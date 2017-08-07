var app = app || {};

var SearchList = Backbone.Collection.extend({
	// Reference to this collection's model.
	model: app.HealthItem,
	
	// No need to save this one, this is generated via nutritionix's API and will simply generate 
	// models for the other collection to use.
});

// Create our global collection of HealthItems
app.SearchItems = new SearchList();