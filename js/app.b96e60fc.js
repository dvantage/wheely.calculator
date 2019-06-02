(function(e){function t(t){for(var r,s,a=t[0],u=t[1],c=t[2],d=0,p=[];d<a.length;d++)s=a[d],o[s]&&p.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Wheely calculator")]),n("div",{staticClass:"wheely-calc"},[n("table",[e._m(0),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.distance,expression:"distance"}],attrs:{name:"distance",type:"text"},domProps:{value:e.distance},on:{input:function(t){t.target.composing||(e.distance=t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.distanceCountry,expression:"distanceCountry"}],attrs:{name:"distanceCountry",type:"text"},domProps:{value:e.distanceCountry},on:{input:function(t){t.target.composing||(e.distanceCountry=t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],attrs:{name:"time",type:"text"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}})])]),e._m(1),n("tr",[n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.classAuto,expression:"classAuto"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.classAuto=t.target.multiple?n:n[0]}}},e._l(e.tariffs,function(t,r,o){return n("option",{domProps:{value:r}},[e._v("\n                            "+e._s(r)+"\n                        ")])}),0)])])]),n("div",{staticClass:"results"},[n("ul",[n("li",[e._v("Сумма поездки: "),n("span",[e._v(e._s(e.result))])]),n("li",[e._v("Сумма поездки со скидкой (20%): "),n("span",[e._v(e._s(e.resultDiscount))])]),n("li",[e._v("Минимальная стоимость поездки: "),n("span",[e._v(e._s(e.minimal))])])])])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Расстояние в городе (км)")]),n("th",[e._v("Расстояние за городом(км)")]),n("th",[e._v("Время (мин)")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Класс")])])}],s=n("9ab4"),a=n("60a3"),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.discount=20,t.distance=0,t.distanceCountry=0,t.time=0,t.classAuto="business",t.minimal=0,t.result=0,t.resultDiscount=0,t.tariffs={business:{base:275,time:22,distance:22,distanceCountry:32,min:500},vip:{base:500,time:40,distance:40,distanceCountry:60,min:1e3},luxe:{base:550,time:45,distance:45,distanceCountry:65,min:2e3},plus:{base:375,time:30,distance:30,distanceCountry:45,min:2500}},t}return s["b"](t,e),t.prototype.onClassAutoChanged=function(e,t){this.calc()},t.prototype.calc=function(){var e=this.tariffs[this.classAuto];this.result=e.base+this.distance*e.distance+this.distanceCountry*e.distanceCountry+this.time*e.time,this.resultDiscount=this.result-this.result*this.discount/100,this.minimal=e.min},t.prototype.mounted=function(){console.log("App mount")},t.prototype.created=function(){console.log("App created")},s["a"]([Object(a["b"])()],t.prototype,"msg",void 0),s["a"]([Object(a["d"])("distance"),Object(a["d"])("distanceCountry"),Object(a["d"])("time"),Object(a["d"])("classAuto",{deep:!0,immediate:!0})],t.prototype,"onClassAutoChanged",null),t=s["a"]([a["a"]],t),t}(a["c"]),c=u,l=c,d=(n("5c0b"),n("2877")),p=Object(d["a"])(l,o,i,!1,null,null,null),f=p.exports,m=n("8c4f");r["default"].use(m["a"]);var v=new m["a"]({mode:"history",base:"/",routes:[]}),h=n("2f62");r["default"].use(h["a"]);var y=new h["a"].Store({state:{},mutations:{},actions:{}}),b=n("9483");Object(b["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,new r["default"]({router:v,store:y,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.b96e60fc.js.map