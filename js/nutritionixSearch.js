function nutritionixSearch (itemName) {
	
	// Url for the request
	nutritionixUrl = "https://api.nutritionix.com/v1_1/search/" + itemName + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=c93a45c0&appKey=6f2acd4dcc292ed9e0996893f4510d2f"
	
	// Shows that nutritionix is loading
	$("body").text("Loading...");
	
	// Get the data
	$.getJSON(nutritionixUrl,function(){})
	.done(function(data) {
		$("body").text("");
		var hits = data.hits;
		console.log(hits);
		
		for(i = 0; i < hits.length; i++) {
			var item = (hits[i].fields.brand_name + " " + hits[i].fields.item_name + ": \n" + hits[i].fields.nf_calories + " Calories");
			console.log(item);
			$("body").append("<p>" + item + "</p>");
		}
	})
	.fail(function(e) {
		alert("Something happened with Nutritionix, please try again later.");
		$("body").text("");
	});
}

//nutritionixSearch("celery");

// This will likely be incorporated directly into the MVC