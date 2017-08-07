var app = app || {};

var HealthItemList = Backbone.Collection.extend({
	// Reference to this collection's model.
	model: app.HealthItem,

	// Save all of the todo items under the `"healthitems-backbone"` namespace.
	localStorage: new Backbone.LocalStorage('healthitems-backbone'),
});

// Make an example to test
// var healthItem = new app.HealthItem({name: 'Huge tub of lard', calories: 1000000});
// var healthItem2 = new app.HealthItem({name: 'Huge tub of lard', calories: 1000000});
// var healthItem3 = new app.HealthItem({name: 'Huge tub of lard', calories: 1000000});
// var healthItem4 = new app.HealthItem({name: 'Huge tub of lard', calories: 1000000});

// var someArray = [healthItem, healthItem2, healthItem3, healthItem4];

// console.log(someArray);

// Create our global collection of HealthItems
// app.HealthItems = new HealthItemList(someArray);

// console.log("Collection size: " + app.HealthItems.length);

// This starts blank
app.HealthItems = new HealthItemList();