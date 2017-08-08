var app = app || {};

// Health Item Model

app.HealthItem = Backbone.Model.extend({

	initialize: function(){
		
	},

	// Default attributes ensure that each todo created has `title` and `completed` keys.
	defaults: {
		name: '',
		calories: 0,
	}
});

//Tests the model:

// var health1 = new app.HealthItem();
// console.log(JSON.stringify(health1));

// var health2 = new app.HealthItem({
  // name: 'something unhealthy',
	// calories: 1000,
// });

// console.log(JSON.stringify(health2));