var Backbone = require('Backbone');



var PAWA = {};
PAWA.Base = Backbone;


PAWA.until = (function() {
	var name = 111;
	var test = function(age) {
		return age;
	};	

	var Router = function() {
		Backbone.Router.apply(this,arguments);
		return this;
	};

	function extend(Child, Parent) {
　　　　var F = function(){};
　　　　F.prototype = Parent.prototype;
　　　　Child.prototype = new F();
　　　　Child.prototype.constructor = Child;
　　　　Child.uber = Parent.prototype;
　　}
	
// 	extend(Router,Backbone.Router);



	return {
		PAWACollection: Backbone.Collection,
		PAWARouter: Router,
		extend:extend
	};
})();

// PAWA.PAWACollection =  new Backbone.Collection




var Router = function() {
	PAWA.Base.Router.apply(this,arguments);
	this.getName = function() {
		alert("dddd");
	}
};
PAWA.until.extend(Router,Backbone.Router);

PAWA.PAWARouter = Router;

console.log(PAWA);

window.PAWA = PAWA;
module.exports = PAWA;