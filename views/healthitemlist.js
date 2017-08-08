var app = app || {};

var healthListView;

(function($){
	app.HealthListView = Backbone.View.extend({
	
		el: $('.health-list'),
		
		initialize: function(){
      _.bindAll(this, 'render', 'appendItem'); // fixes loss of context for 'this' within methods
      this.render(); // not all views are self-rendering. This one is.
			this.collection = app.healthItems;
			console.log(this.collection);
			this.listenTo(this.collection, 'change add remove reset', this.render);
    },
		
		render: function(){
			var calorieCount = 0;
			alert("whao");
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
	console.log(healthListView);
})(jQuery);