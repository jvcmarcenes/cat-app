(function(t){function e(e){for(var o,c,s=e[0],i=e[1],l=e[2],d=0,g=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&g.push(n[c][0]),n[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var o={},n={app:0},r=[];function c(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=o,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(a,o,function(e){return t[e]}.bind(null,o));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/cat-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("h1",[t._v(" "+t._s(t.doggo?"Doggo":"Yako")+" "),a("FaIcon",{attrs:{icon:t.doggo?"dog":"cat"}})],1)]),a("main",{staticClass:"container"},[a("figure",{staticClass:"image-container"},["loading"===t.state?a("div",{staticClass:"loader"}):a("img",{ref:"image",style:t.imageStyle,attrs:{id:"image",src:t.image}})]),a("section",{staticClass:"controls"},[a("button",{staticClass:"btn",on:{click:t.loadNextImage}},[a("span",{staticClass:"btn-label"},[t._v("Random "+t._s(t.doggo?"Doggo":"Yako"))]),a("FaIcon",{attrs:{icon:"sync-alt"}})],1),a("div",{staticClass:"doggo-toggle"},[a("FaIcon",{staticClass:"icon",class:{active:!t.doggo},attrs:{icon:"cat"},on:{click:function(e){return t.toggleDoggo(!1)}}}),a("label",{staticClass:"switch"},[a("input",{ref:"checkbox",attrs:{type:"checkbox"},on:{click:function(e){return t.toggleDoggo(!t.doggo)}}}),a("span",{staticClass:"slider"})]),a("FaIcon",{staticClass:"icon",class:{active:t.doggo},attrs:{icon:"dog"},on:{click:function(e){return t.toggleDoggo(!0)}}})],1),t._m(0)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"credits"},[a("span",{staticClass:"credits-author"},[t._v("An app by Joao Vitor Costa Marcenes")]),a("span",{staticClass:"credits-images"},[t._v("Images by Aden Forhsaw / theCatApi")])])}],c=(a("96cf"),a("1da1")),s=a("bc3a"),i=a.n(s),l=a("d622"),u=a("ecee"),d=a("c074"),g=a("ad3d");u["c"].add(d["a"],d["b"],d["d"],d["c"]);var p={name:"App",components:{FaIcon:g["a"]},data:function(){return{state:"",image:"",imageStyle:"",doggo:!1}},created:function(){i.a.defaults.headers.common["x-api-key"]=l["catKey"]},mounted:function(){this.loadNextImage()},methods:{loadNextImage:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a={limit:1,size:"full"},t.state="loading",e.next=5,i.a.get("https://api.the".concat(t.doggo?"dog":"cat","api.com/v1/images/search"),{params:a});case 5:o=e.sent,n=o.data[0],t.imageStyle=n.width>n.height?"width: 100%;":"height: 100%;",t.image=n.url,t.state="loaded",e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},toggleDoggo:function(t){this.doggo!==t&&(this.$refs.checkbox.checked=t,this.doggo=t,i.a.defaults.headers.common["x-api-key"]=t?l["dogKey"]:l["catKey"],this.loadNextImage())}}},f=p,h=(a("5c0b"),a("2877")),m=Object(h["a"])(f,n,r,!1,null,null,null),b=m.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var o=a("9c0c"),n=a.n(o);n.a},"9c0c":function(t,e,a){},d622:function(t,e){t.exports={catKey:"dfaea3e5-870b-4b97-a4d7-0612f6520246",dogKey:"f1c59b83-0080-45b6-9dae-7a1e2dd2ad29"}}});
//# sourceMappingURL=app.9a1c93aa.js.map