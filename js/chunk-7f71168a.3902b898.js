(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f71168a"],{"0481":function(t,e,n){"use strict";var r=n("23e7"),a=n("a2bf"),i=n("7b0b"),s=n("50c4"),o=n("a691"),l=n("65f0");r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=i(this),n=s(e.length),r=l(e,0);return r.length=a(r,e,e,n,0,void 0===t?1:o(t)),r}})},"0789":function(t,e,n){"use strict";n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return p}));n("99af");var r=n("d9f7");function a(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return(t=Array()).concat.apply(t,[e].concat(r))}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var i="transition".concat(n.props.group?"-group":""),s={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(s.on.leave=a(s.on.leave,(function(t){return t.style.position="absolute"}))),n.props.hideOnLeave&&(s.on.leave=a(s.on.leave,(function(t){return t.style.display="none"}))),e(i,Object(r["a"])(n.data,s),n.children)}}}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,a){return n("transition",Object(r["a"])(a.data,{props:{name:t},on:e}),a.children)}}}var o=n("ade3"),l=n("80d2"),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",r="offset".concat(Object(l["s"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(o["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var a=e._initialStyle,i="".concat(e[r],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=a.visibility,e.style.overflow="hidden",e.style[n]="0",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=i}))},afterEnter:i,enterCancelled:i,leave:function(t){t._initialStyle=Object(o["a"])({transition:"",visibility:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[r],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:a,leaveCancelled:a};function a(e){t&&e._parent&&e._parent.classList.remove(t),i(e)}function i(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},u=(i("carousel-transition"),i("carousel-reverse-transition"),i("tab-transition")),d=i("tab-reverse-transition"),f=(i("menu-transition"),i("fab-transition","center center","out-in"),i("dialog-transition"),i("dialog-bottom-transition"),i("fade-transition")),h=(i("scale-transition"),i("scroll-x-transition"),i("scroll-x-reverse-transition"),i("scroll-y-transition"),i("scroll-y-reverse-transition"),i("slide-x-transition")),v=(i("slide-x-reverse-transition"),i("slide-y-transition"),i("slide-y-reverse-transition"),s("expand-transition",c())),p=s("expand-x-transition",c("",!0))},"0e8f":function(t,e,n){"use strict";n("20f6");var r=n("e8f2");e["a"]=Object(r["a"])("flex")},"297c":function(t,e,n){"use strict";n("a9e3");var r=n("2b0e"),a=n("37c6");e["a"]=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(a["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(t,e,n){"use strict";n("a9e3"),n("c7cd");var r=n("5530"),a=n("ade3"),i=(n("6ece"),n("0789")),s=n("a9ad"),o=n("fe6c"),l=n("a452"),c=n("7560"),u=n("80d2"),d=n("58df"),f=Object(d["a"])(s["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),l["a"],c["a"]),h=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(a["a"])(t,this.$vuetify.rtl?"right":"left",Object(u["f"])(this.normalizedValue,"%")),Object(a["a"])(t,"width",Object(u["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?i["c"]:i["d"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(u["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(u["k"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(a["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),n=e.width;this.internalValue=t.offsetX/n*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e["a"]=h},4069:function(t,e,n){var r=n("44d2");r("flat")},"615b":function(t,e,n){},65470:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{align:"center",justify:"center"}},[t.loading?n("div",[n("Preloader")],1):n("div",[n("v-container",[n("v-card",{staticClass:"text-center blue text-center mx-auto mt-4 mb-6",attrs:{"max-width":"800"}},[n("v-card-text",{staticClass:"white--text"},[n("h1",{staticClass:"font-weight-regular"},[t._v("Winter of Code Contributors")])])],1),n("v-row",[n("h2",{staticStyle:{"font-weight":"normal"}},[t._v("Hey Everyone!,")]),n("h3",{staticClass:"pl-5",staticStyle:{"font-weight":"normal"}},[t._v("After about 2 months of continuous efforts, Winter of Code 21 has come to an end. It was really amazing seeing the applicants work on their projects so passionately. It is with great pleasure, that we announce, the list of successful applicants for WoC 21. We wish these applicants congratulations and good luck for the future. A warm thank you to all the WoC mentors and the entire WoC 21 Team, it wouldn't have been possible without you!")])]),n("v-row",{staticClass:"mt-6",attrs:{justify:"left"}},t._l(t.wocs,(function(t){return n("v-flex",{key:t[0],staticClass:"mb-10",attrs:{xs12:"",sm6:"",md4:"",lg3:"",xl3:""}},[n("WoCCard",{attrs:{WoC:t}})],1)})),1)],1)],1)])},a=[],i=(n("99af"),n("fb6a"),n("d3b7"),n("ddb0"),n("2909")),s=function(){return n.e("chunk-7c876fa5").then(n.bind(null,"8cfa"))},o=function(){return n.e("chunk-0ce3d61f").then(n.bind(null,"f152"))},l={name:"WoC",components:{WoCCard:s,Preloader:o},data:function(){return{loading:!0,wocs:[]}},methods:{fetchWoCs:function(){var t=this,e="1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY",n=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API,r="WoC",a="https://sheets.googleapis.com/v4/spreadsheets/".concat(e,"/values/").concat(r,"?alt=json&key=").concat(n);this.loading=!0,fetch(a).then((function(e){return e.json().then((function(e){console.log(e),t.wocs=Object(i["a"])(e.values.slice(1))}))})).finally((function(){return t.loading=!1}))}},mounted:function(){this.fetchWoCs()}},c=l,u=n("2877"),d=n("6544"),f=n.n(d),h=n("b0af"),v=n("99d9"),p=n("a523"),g=n("0e8f"),m=n("0fd9"),b=Object(u["a"])(c,r,a,!1,null,null,null);e["default"]=b.exports;f()(b,{VCard:h["a"],VCardText:v["b"],VContainer:p["a"],VFlex:g["a"],VRow:m["a"]})},"6ece":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l}));var r=n("b0af"),a=n("80d2"),i=Object(a["g"])("v-card__actions"),s=Object(a["g"])("v-card__subtitle"),o=Object(a["g"])("v-card__text"),l=Object(a["g"])("v-card__title");r["a"]},a2bf:function(t,e,n){"use strict";var r=n("e8b5"),a=n("50c4"),i=n("0366"),s=function(t,e,n,o,l,c,u,d){var f,h=l,v=0,p=!!u&&i(u,d,3);while(v<o){if(v in n){if(f=p?p(n[v],v,e):n[v],c>0&&r(f))h=s(t,e,f,a(f.length),h,c-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[h]=f}h++}v++}return h};t.exports=s},a452:function(t,e,n){"use strict";var r=n("ade3"),a=n("2b0e");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return a["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(r["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(r["a"])({},t,(function(t){this.internalLazyValue=t}))})}var s=i();e["a"]=s},a523:function(t,e,n){"use strict";n("99af"),n("4de4"),n("b64b"),n("2ca0"),n("20f6"),n("4b85");var r=n("e8f2"),a=n("d9f7");e["a"]=Object(r["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,i=e.data,s=e.children,o=i.attrs;return o&&(i.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),t(r.tag,Object(a["a"])(i,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),s)}})},b0af:function(t,e,n){"use strict";n("0481"),n("4069"),n("a9e3");var r=n("5530"),a=(n("615b"),n("10d2")),i=n("297c"),s=n("1c87"),o=n("58df");e["a"]=Object(o["a"])(i["a"],s["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(r["a"])({"v-card":!0},s["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},e8f2:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("99af"),n("4de4"),n("a15b"),n("b64b"),n("2ca0"),n("498a");var r=n("2b0e");function a(t){return r["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var r=n.props,a=n.data,i=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var s=a.attrs;if(s){a.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),e(r.tag,a,i)}})}}}]);
//# sourceMappingURL=chunk-7f71168a.3902b898.js.map