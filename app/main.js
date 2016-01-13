var PAWA = require('../common/until/PAWA');
console.log($);
// var Handlebars = require("./file.handlebars");
require(['./mgm/MgmRouter','./home/Home','html!./wrapview/wrapTpl'], 
function(MgmRouter,Home,wrapTpl) {
  
  var WrapView = PAWA.View.extend({
    initialize:function() {

    },
    id:'WrapView',
    template:wrapTpl,
    render:function() {
      var template = Handlebars.compile(this.template);
      var result = template(data);
      $("body").html(result);
    }
  });


  var AppRouter = PAWA.Router.extend({
    initialize: function() {
      console.log("Route initialize");
    },
    routes: {
      "": "index",
      "index": "index",
      "mgm":"mgm",
    },
    index: function() {
      // app_router.navigate("home",{trigger:true,replace:true});
      var wrapview = new WrapView();
      wrapview.render();
    },
    mgm:function() {
      alert("mgm");
    }
  });
  var app_router = new AppRouter();
  app_router.on('route', function (route, params) {
     console.log('hash change', arguments);  //这里route是路由对应的方法名
  });

  var MgmRouter = new MgmRouter();
  PAWA.history.start();
});
