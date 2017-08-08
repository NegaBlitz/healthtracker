var app = app || {};

var healthListView;

(function($){
	app.HealthListView = Backbone.View.extend({
		
		el: $('.health-list'),
		
		initialize: function(){
      _.bindAll(this, 'render', 'appendItem'); // fixes loss of context for 'this' within methods
			this.collection = app.healthItems;
			// console.log(this.collection);
      this.render(); // not all views are self-rendering. This one is.
			this.listenTo(this.collection, 'change add remove reset', this.render);
			
			// if there's things here already, put them in
			this.collection.each(function (model) {	
				this.appendItem(model);
			}, this)
    },
		
		render: function(){
			var calorieCount = 0;
			console.log(this.collection);
			this.collection.each(function (model) {
				calorieCount += model.get('calories');
			})
			calorieCount = Math.round(calorieCount * 100)/100;
			$('#total-calories').text(calorieCount + ' total Calories');
    },
	
		appendItem: function(item) {
			var itemView = new app.HealthItemView({
        model: item
      });
      $('.health-list').append(itemView.render().el);
			console.log(this.collection);
		}
	})
	
	healthListView = new app.HealthListView();
	// console.log(healthListView);
})(jQuery);