var PAWA = require('../common/until/PAWA');
var AppRouter = PAWA.Base.Router.extend({
     routes: {
     	 "":"index",
         "index" : "index"
     },
     index: function() {
         alert("11111111/111");
         console.log(this);
     }
 });

var app_router = new AppRouter();
PAWA.Base.history.start();

