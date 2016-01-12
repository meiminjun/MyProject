var MgmRouter = PAWA.Router.extend({
	initialize: function () {
        console.log("Route initialize");
    },
	routes: {
		"index2": "index"
	},
	index: function() {
		alert("2222");
	}
});


module.exports = MgmRouter;