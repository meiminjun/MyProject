var PAWA = require('../common/until/PAWA');
var css = require('../asset/css/test.css');
var template = require('./wrapview/wrapTpl.html');
alert(1111);
require(['./mgm/MgmRouter'],
  function(MgmRouter) {

    var WrapView = PAWA.View.extend({
      initialize: function() {

      },
      id: 'WrapView',
      render: function() {
        var data = {
          say_hello: "it is handlebars",
          auther: {
            name: "meiminjun",
            age: "29",
            sex: "man"
          },
          list: [{
            name: 11
          }, {
            name: 222
          }, {
            name: 3333
          }],
          response:''
        };
        // var template = Handlebars.compile(this.template);
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
        "mgm": "mgm",
      },
      index: function() {
        // app_router.navigate("home",{trigger:true,replace:true});
        var wrapview = new WrapView();
        wrapview.render();
      },
      mgm: function() {
        alert("mgm");
      }
    });
    var app_router = new AppRouter();
    app_router.on('route', function(route, params) {
      console.log('hash change', arguments); //这里route是路由对应的方法名
    });

    var MgmRouter = new MgmRouter();
    PAWA.history.start();
  });