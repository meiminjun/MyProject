var Backbone = require('Backbone');

var PAWA = {};


/**
 * 接口类
 * @param {[type]} name    接口名字
 * @param {[type]} methods 接收方法名称的集合(数组)
 */
PAWA.Interface = function(name, methods) {
	// 判断接口参数个数
	if (arguments.length != 2) {
		throw new Error('this instance interface constructor arguments must be 2 length');
	}
	this.name = name;
	this.methods = []; // 定义一个空数组对象 等待接收methods 里的元素(方法名字)
	for (var i = 0, len = methods.length; i < len; i++) {
		if (typeof methods[i] !== 'string') {
			throw new Error("the interface method name is error");
		}
		this.methods.push(methods[i]);
	}
};

/**
 * 检验接口里的方法
 * 如果检验方法通过 不做任何操作
 * 如果检验方法不通过  抛出异常
 * 这个方法的目的  就是检测方法的
 * @param  {[type]} object [description]
 * @return {[type]}        [description]
 */
PAWA.Interface.ensureImplements = function(object) {
	// 如果检测方法接收的参数小于2 参数传递失败！
	if (arguments.length < 2) {
		throw new Error('Interface ensureImplements methods constructor arguments must be >= 2!');
	}
	// 获得接口实例对象
	for (var i = 1, len = arguments.length; i < len; i++) {
		var instanceInterface = arguments[i];
		if (instanceInterface.constructor !== Interface) {
			throw new Error('the arguments constructor not be Interface class');
		}
		// 循环接口实例对象里面的每一个方法
		for (var j = 0; j < instanceInterface.methods.length; j++) {
			// 用一个零时变量接收每一个方法的名字
			var methodName = instanceInterface.methods[j];
			if (!object[methodName] || typeof object[methodName] !== 'function') {
				throw new Error('the method name "' + methodName + '" is not found!');
			}
		}
	}
};

/**
 * 继承方法
 * @param  {[type]} Child  子类
 * @param  {[type]} Parent 父类
 * @return {[type]}        [description]
 */
PAWA.extend = function(Child,Parent) {　
	var F = function() {};　　　　
	F.prototype = Parent.prototype;　　　　
	Child.prototype = new F();　　　　
	Child.prototype.constructor = Child;　　　　
	Child.uber = Parent.prototype;
};

PAWA.Backbone = Backbone;
PAWA.Model = Backbone.Model;
PAWA.View = Backbone.View;
PAWA.Collection = Backbone.Collection;
PAWA.history = Backbone.history;

PAWA.Router = Backbone.Router;






// PAWA.Base = (function() {
// 	var version = '0.0.1';
// 	var test = function() {
// 		alert(111);
// 	}

// 	var Router = Backbone.Router;
// 	var Collection = Backbone.Collection;

// 	return {
// 		version:version,
// 		Router:Router,
// 		Collection:Collection
// 	};
// })()


// PAWA.until = (function() {
// 	var name = 111;
// 	var test = function(age) {
// 		return age;
// 	};

// 	var Router = function() {
// 		Backbone.Router.apply(this, arguments);
// 		return this;
// 	};

// 	return {
// 		PAWACollection: Backbone.Collection,
// 		PAWARouter: Router
// 	};
// })();

// PAWA.PAWACollection =  new Backbone.Collection



// var Router = function() {
// 	PAWA.Base.Router.apply(this, arguments);
// 	this.getName = function() {
// 		alert("dddd");
// 	}
// };
// PAWA.extend(Router, Backbone.Router);

// PAWA.PAWARouter = Router;

console.log(PAWA);

window.PAWA = PAWA;
module.exports = PAWA;