var PAWA = require('../common/until/PAWA');

var MgmRouter = require('./mgm/MgmRouter'); 

require.ensure(['./mgm/MgmRouter'], function(MgmRouter) {
   
   var AppRouter = PAWA.Router.extend({
   	initialize: function () {
           console.log("Route initialize");
       },
   	routes: {
   		"":"index",
   		"index": "index"
   	},
   	index: function() {
   		alert("11111111/111");
   	}
   });

   var app_router = new AppRouter();




   var MgmRouter = new MgmRouter();
   PAWA.history.start();
   app_router.navigate("home", {
       trigger : true,
       replace : true
   });




});



