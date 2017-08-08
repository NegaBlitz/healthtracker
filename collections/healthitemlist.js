var app = app || {};

var HealthItemList = Backbone.Collection.extend({
	// Reference to this collection's model.
	model: app.HealthItem,

	// Save all of the todo items under the `"healthitems-backbone"` namespace.
	localStorage: new Backbone.LocalStorage("healthitems-backbone"),
});

// This starts blank
app.healthItems = new HealthItemList();
app.healthItems.fetch();

console.log(app.healthItems);