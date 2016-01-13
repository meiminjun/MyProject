
define(function() {
	var Home = PAWA.Router.extend({
		initialize: function () {
	        console.log("Route initialize");
	    },
		routes: {
			"home": "home"
		},
		home: function() {
			alert("home");
		}
	});
	return Home;
});




// var Home = PAWA.Router.extend({
// 	initialize: function () {
//         console.log("Route initialize");
//     },
// 	routes: {
// 		"home": "home"
// 	},
// 	home: function() {
		
// 	}
// });


// module.exports = Home;