(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/alexbgomes/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar"),n("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{type:"is-dark","fixed-top":""}},[n("template",{slot:"start"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("div",{staticClass:"buttons"},[n("b-button",{attrs:{tag:"router-link",to:t.homePage,type:"is-link"}},[t.homeText?n("p",[t._v("Home")]):n("b-icon",{attrs:{icon:"home"}})],1)],1)])],1),n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("div",{staticClass:"buttons"},[n("b-button",{attrs:{tag:"router-link",to:t.contactsPage,type:"is-link"}},[n("p",[t._v("Contact Me")])])],1)])],1)],2)},s=[],c=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home"},[t._m(0),n("carousel")],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-dark"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("Alex Gomes")]),n("h2",{staticClass:"subtitle"},[t._v("Software Developer")])])])])}],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"carousel"},[n("b-carousel",{attrs:{indicator:t.indicator,"indicator-inside":t.indicatorInside,"indicator-mode":t.indicatorMode,"indicator-style":t.indicatorStyle,arrow:t.arrow,"arrow-both":t.arrowBoth,"arrow-hover":t.arrowHover,"icon-prev":t.iconPrev,"icon-next":t.iconNext,"icon-size":t.iconSize,animated:t.animated,autoplay:t.autoPlay,"pause-hover":t.pauseHover,"pause-info":t.pauseInfo,"pause-info-type":t.pauseInfoType,"pause-text":t.pauseText,interval:t.interval},model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},t._l(t.carousels,(function(e,a){return n("b-carousel-item",{key:a},[n("section",{class:"hero is-medium is-"+e.color+" is-bold"},[n("div",{staticClass:"hero-body has-text-centered"},[n("h1",{staticClass:"title"},[t._v(t._s(e.title))]),void 0!==e.routerLink?n("div",{staticClass:"slide-container"},[n("b-tooltip",{attrs:{label:e.linkTooltip,position:"is-bottom"}},[n("router-link",{staticClass:"slide-link slide-container",attrs:{to:e.routerLink,tag:"div"}},[void 0!==e.content?n("p",{domProps:{innerHTML:t._s(e.content)}}):t._e()])],1)],1):void 0!==e.link?n("div",{staticClass:"slide-container"},[n("b-tooltip",{attrs:{label:e.linkTooltip,position:"is-bottom"}},[n("a",{staticClass:"slide-link",attrs:{href:e.link}},[void 0!==e.content?n("p",{domProps:{innerHTML:t._s(e.content)}}):t._e()])])],1):n("div",{staticClass:"slide-container"},[void 0!==e.content?n("p",{domProps:{innerHTML:t._s(e.content)}}):t._e()])])])])})),1)],1)},f=[],p={name:"Carousel",data:function(){return{carousel:0,indicator:!0,indicatorInside:!0,indicatorMode:"click",indicatorStyle:"is-lines",arrow:!0,arrowBoth:!0,arrowHover:!1,iconPrev:"caret-left",iconNext:"caret-right",iconSize:"is-medium",animated:"slide",autoPlay:!0,pauseHover:!0,pauseInfo:!0,pauseInfoType:"is-dark",pauseText:"Paused",interval:3e3,carousels:[{title:"Looking for Summer 2020 Positions!",content:"Passionate 3rd year Computer Science student, dedicated team player and leader.<br>Contact Me!",routerLink:et[2].path,linkTooltip:"Find out how",color:"dark"},{title:"Test External Link",color:"primary",content:"Best Search Engine",link:"http://www.google.ca/",linkTooltip:"Google"},{title:"Slide 3",color:"info"},{title:"Slide 4",color:"success"},{title:"Slide 5",color:"warning"},{title:"Slide 6",color:"danger"}]}}},h=p,v=(n("c270"),n("2877")),m=Object(v["a"])(h,d,f,!1,null,"1afbee9c",null),b=m.exports,w={data:function(){return{}},components:{Carousel:b}},g=w,y=(n("fcd2"),Object(v["a"])(g,l,u,!1,null,"24823d25",null)),k=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact"},[n("div",{staticClass:"level cards"},[n("contact-card",{attrs:{type:"Email",contact:"alex.gomes@ryerson.ca",link:"mailto:alex.gomes@ryerson.ca",icon:"fas fa-envelope"}}),n("contact-card",{attrs:{type:"GitHub",contact:"alexbgomes",link:"https://github.com/alexbgomes",icon:"fab fa-github-square"}}),n("contact-card",{attrs:{type:"LinkedIn",contact:"in/alexbgomes",link:"https://www.linkedin.com/in/alexbgomes/",icon:"fab fa-linkedin"}})],1),n("calendar",[n("h1",[t._v("My Professional Availability")])])],1)},C=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact-card"},[n("a",{attrs:{href:t.link,target:"_blank"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left"},[n("i",{class:t.icon})]),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v(t._s(t.contact))]),n("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.type))])])])])])])])},E=[],S={Name:"ContactCard",props:{icon:{type:String,required:!0},type:{type:String,required:!0},contact:{type:String,required:!0},link:{type:String,required:!0}}},P=S,T=(n("b2ec"),Object(v["a"])(P,x,E,!1,null,"8a8ba2b4",null)),L=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"calendar"},[t._t("default"),n("vue-cal",{attrs:{"disable-views":t.disableViews,"time-from":t.timeFrom,"time-to":t.timeTo,"time-cell-height":t.timeCellHeight,events:t.events,"selected-date":t.selectedDate,startWeekOnSunday:"",small:"","today-button":""},scopedSlots:t._u([{key:"today-button",fn:function(){return[n("b-tooltip",{attrs:{label:"Today",type:"is-dark",position:"is-bottom"}},[n("button",{staticClass:"button"},[n("b-icon",{attrs:{icon:"crosshairs"}})],1)])]},proxy:!0}])})],2)},W=[],j=(n("99af"),n("ac1f"),n("38cf"),n("1276"),n("7fa7")),D=n.n(j),M=(n("b55b"),{name:"Calendar",data:function(){return{windowWidth:window.innerWidth,disableViews:["years","year","month","day","week"],timeFrom:480,timeTo:1080,selectedDate:new Date,holidays:["2020-02-17","2020-02-18","2020-02-19","2020-02-20","2020-02-21"],events:[].concat(this.recurEvent("2020-01-13","2020-04-09","11:00","13:00","week","HST701 - Lec A",'<i class="icon fas fa-landmark"></i>',"hist-uni"),this.recurEvent("2020-01-13","2020-04-09","14:00","16:00","week","CPS616 - Lec A",'<i class="icon fas fa-code"></i>',"algo-uni"),this.recurEvent("2020-01-14","2020-04-09","09:00","10:00","week","HST701 - Lec B",'<i class="icon fas fa-landmark"></i>',"hist-uni"),this.recurEvent("2020-01-14","2020-04-09","10:00","11:00","week","ACC100 - Lec A",'<i class="icon fas fa-chart-line"></i>',"acct-uni"),this.recurEvent("2020-01-14","2020-04-09","12:00","13:00","week","CPS706 - Lab",'<i class="icon fas fa-server"></i>',"ntwk-uni"),this.recurEvent("2020-01-14","2020-04-09","17:00","18:00","week","CPS616 - Lec B",'<i class="icon fas fa-code"></i>',"algo-uni"),this.recurEvent("2020-01-15","2020-04-09","08:00","09:00","week","CPS706 - Lec A",'<i class="icon fas fa-server"></i>',"algo-uni"),this.recurEvent("2020-01-15","2020-04-09","11:00","12:00","week","MTH310 - Lab",'<i class="icon fas fa-square-root-alt"></i>',"calc-uni"),this.recurEvent("2020-01-15","2020-04-09","14:00","15:00","week","CPS616 - Lab",'<i class="icon fas fa-code"></i>',"algo-uni"),this.recurEvent("2020-01-16","2020-04-09","10:00","12:00","week","MTH310 - Lec A",'<i class="icon fas fa-square-root-alt"></i>',"calc-uni"),this.recurEvent("2020-01-16","2020-04-09","12:00","14:00","week","ACC100 - Lec B",'<i class="icon fas fa-chart-line"></i>',"acct-uni"),this.recurEvent("2020-01-16","2020-04-09","14:00","16:00","week","CPS706 - Lec B",'<i class="icon fas fa-server"></i>',"ntwk-uni"),this.recurEvent("2020-01-17","2020-04-09","14:00","16:00","week","MTH310 - Lec B",'<i class="icon fas fa-square-root-alt"></i>',"calc-uni"))}},components:{VueCal:D.a},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth)}))},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},methods:{getWindowWidth:function(){this.windowWidth=window.innerWidth},recurEvent:function(t,e,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"day",o=arguments.length>5?arguments[5]:void 0,r=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,c=[];function l(t,e){return{start:t,end:e,title:o,content:r,class:s}}function u(t){var e=new Date(t);function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t),a=e-n.length;return"".concat("0".repeat(a)).concat(t)}return"".concat(e.getFullYear(),"-").concat(n(e.getMonth()+1),"-").concat(n(e.getDate()))}var d=new Date("".concat(t," ").concat(n)).valueOf(),f=new Date("".concat(e," ").concat(a)).valueOf();if(f<d)throw new Error("End date must succeed start date.");var p=n.split(":"),h=a.split(":"),v=parseInt(p[0]),m=parseInt(h[0]),b=parseInt(p[1]),w=parseInt(h[1]);if(m<v||m==v&&w<b)throw new Error("End time must succeed start time.");var g=d,y=new Date(g);while(g<f){var k=u(y);c.push(new l("".concat(k," ").concat(n),"".concat(k," ").concat(a))),"day"===i?y.setDate(y.getDate()+1):"week"===i?y.setDate(y.getDate()+7):"month"===i?y.setMonth(y.getMonth()+1):"year"===i?y.setFullYear(y.getFullYear()+1):"number"==typeof i&&y.setDate(y.getDate()+i),g=y.valueOf()}return c}},computed:{timeCellHeight:function(){return this.windowWidth<768?50:100}}}),H=M,$=(n("d7ee"),Object(v["a"])(H,O,W,!1,null,"044198eb",null)),I=$.exports,A={name:"Contact",components:{Calendar:I,ContactCard:L},mounted:function(){var t=document.createElement("script");t.async=!0,t.defer=!0,t.setAttribute("src","https://platform.linkedin.com/badges/js/profile.js"),document.head.appendChild(t)}},B=A,q=(n("77be"),Object(v["a"])(B,_,C,!1,null,"7d48835f",null)),z=q.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"projects"},[n("h1",[t._v("Coming Soon...")])])}],G={},V=G,Y=Object(v["a"])(V,F,N,!1,null,"75e226c4",null),J=Y.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"not_found"},[n("h1",[t._v("Uh oh...")]),n("p",[t._v("Did you break this or did I?")])])}],Q={name:"NotFound",data:function(){return{}}},R=Q,X=Object(v["a"])(R,U,K,!1,null,"496f8b2a",null),Z=X.exports;a["default"].use(c["a"]);var tt=[{path:"/",component:k},{path:"/home",component:k},{path:"/contact",component:z},{path:"/projects",component:J},{path:"/cps530-website"},{path:"*",component:Z}],et=tt,nt=new c["a"]({mode:"history",routes:tt}),at={name:"NavBar",data:function(){return{windowWidth:window.innerWidth}},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth)}))},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},methods:{getWindowWidth:function(){this.windowWidth=window.innerWidth}},computed:{homeText:function(){return this.windowWidth<1024},homePage:function(){return et[1].path},contactsPage:function(){return et[2].path}}},it=at,ot=Object(v["a"])(it,r,s,!1,null,"b51cecdc",null),rt=ot.exports,st={name:"app",components:{NavBar:rt}},ct=st,lt=(n("034f"),Object(v["a"])(ct,i,o,!1,null,null,null)),ut=lt.exports,dt=n("289d");n("5abe");a["default"].config.productionTip=!1,a["default"].use(dt["a"],{defaultIconPack:"fas"}),new a["default"]({router:nt,render:function(t){return t(ut)}}).$mount("#app")},"5d28":function(t,e,n){},"77be":function(t,e,n){"use strict";n("f58d")},"85ec":function(t,e,n){},"8a88":function(t,e,n){},ae5a:function(t,e,n){},b2ec:function(t,e,n){"use strict";n("5d28")},c270:function(t,e,n){"use strict";n("8a88")},d7ee:function(t,e,n){"use strict";n("ae5a")},ecea:function(t,e,n){},f58d:function(t,e,n){},fcd2:function(t,e,n){"use strict";n("ecea")}});
//# sourceMappingURL=app.2b7b43c5.js.map