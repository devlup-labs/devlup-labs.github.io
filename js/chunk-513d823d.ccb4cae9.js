(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-513d823d"],{"07bd":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{align:"center"}},[t.loading?e("div",[e("Preloader")],1):e("div",[e("v-container",[e("v-row",t._l(t.projects,(function(t){return e("v-flex",{key:t[0],staticClass:"mb-6",attrs:{xs12:"",sm12:"",md6:"",lg4:"",xl4:""}},[e("ProjectCard",{attrs:{Project:t}})],1)})),1)],1)],1)])},a=[],o=(e("d3b7"),function(){return Promise.all([e.e("chunk-700187a5"),e.e("chunk-084112e8"),e.e("chunk-4f94edae")]).then(e.bind(null,"8f44"))}),c=function(){return e.e("chunk-0ce3d61f").then(e.bind(null,"f152"))},i={name:"Project",components:{ProjectCard:o,Preloader:c},data:function(){return{loading:!0,projects:[]}},methods:{fetchProjects:function(){var t=this,n="https://script.google.com/macros/s/AKfycbxsb_2WN21NJ4p_yEVS8DoCIcs-3lL9VlB5zgbGXeEhfERHkjkIcFOTvkhw1m69irgH7g/exec";this.loading=!0,fetch(n).then((function(n){return n.json().then((function(n){t.projects=n}))})).finally((function(){return t.loading=!1}))}},mounted:function(){this.fetchProjects()}},s=i,d=e("2877"),f=e("6544"),u=e.n(f),l=e("a523"),p=e("0e8f"),h=e("0fd9"),b=Object(d["a"])(s,r,a,!1,null,null,null);n["default"]=b.exports;u()(b,{VContainer:l["a"],VFlex:p["a"],VRow:h["a"]})},"0e8f":function(t,n,e){"use strict";e("20f6");var r=e("e8f2");n["a"]=Object(r["a"])("flex")},"20f6":function(t,n,e){},a523:function(t,n,e){"use strict";e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("20f6"),e("4b85");var r=e("e8f2"),a=e("d9f7");n["a"]=Object(r["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,r=n.props,o=n.data,c=n.children,i=o.attrs;return i&&(o.attrs={},e=Object.keys(i).filter((function(t){if("slot"===t)return!1;var n=i[t];return t.startsWith("data-")?(o.attrs[t]=n,!1):n||"string"===typeof n}))),r.id&&(o.domProps=o.domProps||{},o.domProps.id=r.id),t(r.tag,Object(a["a"])(o,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),c)}})},e8f2:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));e("99af"),e("4de4"),e("a15b"),e("b64b"),e("2ca0"),e("498a");var r=e("2b0e");function a(t){return r["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,e){var r=e.props,a=e.data,o=e.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var c=a.attrs;if(c){a.attrs={};var i=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(a.attrs[t]=n,!1):n||"string"===typeof n}));i.length&&(a.staticClass+=" ".concat(i.join(" ")))}return r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),n(r.tag,a,o)}})}}}]);
//# sourceMappingURL=chunk-513d823d.ccb4cae9.js.map