(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22cc16"],{f51b:function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h-page-content",{attrs:{padding:""}},[a("div",{staticClass:"text-h4"},[t._v("Rating")]),a("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Normal Point",code:t.ex1,script:t.ex1Script,javascript:""}},[a("h-rating",{attrs:{showmessages:""},model:{value:t.rating1,callback:function(s){t.rating1=s},expression:"rating1"}})],1),a("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Half Point",code:t.ex2,script:t.ex2Script,javascript:""}},[a("h-rating",{attrs:{showmessages:"",halfpoints:""},model:{value:t.rating2,callback:function(s){t.rating2=s},expression:"rating2"}})],1),a("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Custom Messages",code:t.ex3,script:t.ex3Script,javascript:""}},[a("h-rating",{attrs:{messages:["1 star","2 stars","3 stars","4 stars","5 stars"],halfpoints:"",showmessages:""},model:{value:t.rating2,callback:function(s){t.rating2=s},expression:"rating2"}})],1),a("h2",{staticClass:"text-primary"},[t._v(" Vue Properties")]),a("h-separator"),a("div",{staticClass:"flex"},[a("div",[a("h3",[t._v("Name")]),a("div",[t._v("halfpoints")]),a("div",[t._v("showmessages")]),a("div",[t._v("messages")])]),a("div",{staticClass:"h-pl-md"},[a("h3",[t._v("Type")]),a("div",[t._v("Boolean")]),a("div",[t._v("Boolean")]),a("div",[t._v("Array")])]),a("div",{staticClass:"h-pl-md"},[a("h3",[t._v("Description")]),a("div",[t._v("if true show stars and half stars for float points")]),a("div",[t._v("if true show messages for each star")]),a("div",[t._v("Array of messages for each star")])])])],1)},e=[],r={data:function(){return{rating1:3,rating2:3.5,ex1:'\n<div>\n  <h-rating v-model="rating1" showmessages/>\n</div>\n',ex1Script:"\nexport default {\n  data () {\n    return {\n      rating1: 3\n    }\n  }\n}\n",ex2:'\n<div>\n  <h-rating v-model="rating2" showmessages halfpoints/>\n</div>\n',ex2Script:"\nexport default {\n  data () {\n    return {\n      rating2: 3.5\n    }\n  }\n}\n",ex3:"\n<h-rating\n  :messages=\"['1 star', '2 stars', '3 stars', '4 stars', '5 stars']\"\n  v-model=\"rating2\"\n  halfpoints\n  showmessages\n/>\n",ex3Script:"\nexport default {\n  data () {\n    return {\n      rating2: 3.5\n    }\n  }\n}\n"}}},i=r,o=a("2877"),l=Object(o["a"])(i,n,e,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d22cc16.fdcfa7c0.js.map