(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);v&&v(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},o={app:0},r=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-32216c46":"d4a2d846","chunk-2d0d0b4d":"2b46cd25","chunk-2d0ddfce":"a7b0707a","chunk-2d22bce5":"eea21fb2","chunk-2d22bf91":"dcd7c421","chunk-6fbb257b":"dc4423fc","chunk-347d31b3":"faa2e037","chunk-95b4789e":"7cc3d0d8","chunk-65befef4":"1454127b"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-32216c46":1,"chunk-6fbb257b":1,"chunk-95b4789e":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-32216c46":"8689fec2","chunk-2d0d0b4d":"31d6cfe0","chunk-2d0ddfce":"31d6cfe0","chunk-2d22bce5":"31d6cfe0","chunk-2d22bf91":"31d6cfe0","chunk-6fbb257b":"892a8bba","chunk-347d31b3":"31d6cfe0","chunk-95b4789e":"ac0e1639","chunk-65befef4":"31d6cfe0"}[t]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],v.parentNode.removeChild(v),n(r)},v.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(v)})).then((function(){i[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}o[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var v=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),i=n("58ca"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app has-navbar-fixed-top"}},[n("navDrawer"),n("navbar"),n("sysBar"),n("v-main",[n("div",{staticClass:"content"},[n("router-view")],1)]),n("fabComponent"),n("foot")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",dense:"",flat:"","collapse-on-scroll":""}},[n("v-app-bar-nav-icon",{on:{click:function(e){return t.navclick()}}}),n("v-avatar",{staticClass:"mx-2 non-touch point-cursor",attrs:{size:"38",color:"primary"},on:{click:function(e){return t.$router.push("/")}}},[n("v-img",{attrs:{src:t.avatar}})],1),n("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-toolbar-title",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"font-weight-bold non-touch point-cursor",on:{click:function(e){return t.routerPush("/")}}},"v-toolbar-title",i,!1),a),[t._v(" Shan.tk ✌ ")])]}}])},[n("span",[t._v("Sudharshan TK")])]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.windowClick(t.github.link)}}},"v-btn",i,!1),a),[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(t.github.icon))])],1)]}}])},[n("span",[t._v(t._s(t.github.title))])])],1)},c=[],l={name:"Nav-Bar",data:function(){return{github:{link:"https://github.com/tks18",icon:"mdi-github",title:"Shan.tk's Github Profile"},avatar:"https://i.ibb.co/9YwxPwZ/IMG-20191218-222419-347.webp"}},methods:{navclick:function(){this.$state.store.navbar.active=!0},routerPush:function(t){this.$router.push(t)},windowClick:function(t){window.open(t)}}},u=l,d=n("2877"),v=n("6544"),m=n.n(v),f=n("40dc"),h=n("5bc1"),b=n("8212"),p=n("8336"),g=n("132d"),k=n("adda"),y=n("2fa4"),w=n("2a7f"),_=n("3a2f"),x=n("269a"),S=n.n(x),C=n("5607"),V=Object(d["a"])(u,s,c,!1,null,null,null),j=V.exports;m()(V,{VAppBar:f["a"],VAppBarNavIcon:h["a"],VAvatar:b["a"],VBtn:p["a"],VIcon:g["a"],VImg:k["a"],VSpacer:y["a"],VToolbarTitle:w["a"],VTooltip:_["a"]}),S()(V,{Ripple:C["a"]});var $=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",temporary:"",src:t.$state.store.botSettings.navBlur?t.drawerBackImg:void 0},model:{value:t.$state.store.navbar.active,callback:function(e){t.$set(t.$state.store.navbar,"active",e)},expression:"$state.store.navbar.active"}},[n("v-container",{class:t.$state.store.botSettings.navBlur?"back-blur":" "},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-avatar",{staticClass:"point-cursor non-touch border-light",attrs:{size:"125"},on:{click:function(e){return t.routerPush("/about")}}},[n("v-img",{attrs:{src:t.avatar}})],1)],1),n("v-list-item",{staticClass:"px-2",attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-center point-cursor non-touch font-weight-medium",on:{click:function(e){return t.routerPush("/about")}}},[t._v(" Sudharshan TK ")]),n("v-list-item-subtitle",{staticClass:"text-center non-touch font-italic"},[t._v(" (aka Shan.tk) ")]),n("v-list-item-subtitle",{staticClass:"text-center non-touch font-weight-light"},[t._v(" Web Developer/Aspiring Chartered Accountant ")])],1)],1),n("v-list",{staticClass:"text-left"},[n("v-list-item-group",[n("v-divider",{staticClass:"ma-1"}),n("bottomSettings",{attrs:{model:"list"}}),n("v-divider",{staticClass:"ma-1"}),t._l(t.navPaths,(function(e,a){return n("v-list-item",{key:a,on:{click:function(n){return t.routerPush(e.link)}}},[n("v-list-item-icon",[n("v-icon",[t._v(" "+t._s(e.icon)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))]),n("v-list-item-subtitle",[t._v(t._s(e.subtitle))])],1)],1)}))],2)],1),n("v-spacer"),n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[t._v(" Website Stats ")]),n("v-expansion-panel-content",[n("v-list-item-group",t._l(t.siteStats,(function(e,a){return n("v-tooltip",{key:a,attrs:{top:"",transition:"scroll-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,o=a.attrs;return[n("v-list-item",t._g(t._b({on:{click:function(n){return t.windowClick(e.link)}}},"v-list-item",o,!1),i),[n("v-list-item-icon",[n("v-icon",{attrs:{small:""}},[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.name)+" ")])],1)],1)]}}],null,!0)},[n("span",[t._v(t._s(e.tooltip))])])})),1)],1)],1)],1)],1)],1)},O=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-sheet",{attrs:{inset:"",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return["list"==t.model?n("v-list-item",t._g(t._b({},"v-list-item",i,!1),a),[n("v-list-item-icon",[n("v-icon",[t._v("mdi-cog-refresh")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" Settings ")]),n("v-list-item-subtitle",[t._v(" Change the Accent Color ")])],1)],1):t._e(),"icon"==t.model?n("v-card",t._g(t._b({staticClass:"ma-1 pa-2 non-touch point-cursor",attrs:{elevation:"0"}},"v-card",i,!1),a),[n("v-row",{staticClass:"mb-2",attrs:{align:"center",justify:"center"}},[n("v-btn",{attrs:{fab:"",small:"",color:"primary"}},[n("v-icon",[t._v("mdi-cog-refresh")])],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"text font-weight-semibold"},[t._v("Settings")])])],1):t._e()]}}]),model:{value:t.activated,callback:function(e){t.activated=e},expression:"activated"}},[n("v-sheet",{staticClass:"pa-8 mt-auto"},[n("v-row",{attrs:{align:"start",justify:"end"}},[n("v-col",[n("h2",{staticClass:"title primary--text"},[t._v("Settings")])]),n("v-col",{attrs:{align:"end",justify:"start"}},[n("v-btn",{attrs:{color:"primary",icon:""},on:{click:function(e){t.activated=!t.activated}}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1),n("v-row",[n("v-col",{attrs:{align:"start",justify:"center"}},[n("p",{staticClass:"text"},[t._v("Change Primary Theme")])]),n("v-col",{attrs:{align:"end",justify:"center"}},[n("v-dialog",{attrs:{"max-width":"300"},model:{value:t.darkdiag,callback:function(e){t.darkdiag=e},expression:"darkdiag"}},[n("v-card",[n("v-card-title",[t._v(" Change Primary Theme ")]),n("v-card-text",[n("v-switch",{attrs:{dense:"",inset:"",color:"primary",value:t.$state.store.botSettings.darkmode,label:"Turn"+(t.$state.store.botSettings.darkmode?" Off":" On")+" Dark Mode"},on:{click:t.changeTheme},model:{value:t.$state.store.botSettings.darkmode,callback:function(e){t.$set(t.$state.store.botSettings,"darkmode",e)},expression:"$state.store.botSettings.darkmode"}})],1)],1)],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.darkdiag=!0}}},[t._v(" Change ")])],1)],1),n("v-row",[n("v-col",{attrs:{align:"start",justify:"center"}},[n("p",{staticClass:"text"},[t._v("Change Accent Color")])]),n("v-col",{attrs:{align:"end",justify:"center"}},[n("v-dialog",{attrs:{"max-width":"350"},model:{value:t.colorDiag,callback:function(e){t.colorDiag=e},expression:"colorDiag"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(" Choose Accent Color ")]),n("v-card-text",[n("v-color-picker",{attrs:{"show-swatches":"","hide-inputs":""},model:{value:t.accent,callback:function(e){t.accent=e},expression:"accent"}})],1),n("v-card-actions",[n("v-spacer"),n("v-col",[n("v-btn",{staticClass:"subtitle text-bold",attrs:{color:"primary",outlined:""},on:{click:function(e){return t.changeAccent()}}},[t._v(" Accept ")])],1),n("v-col",[n("v-btn",{staticClass:"subtitle text-bold",attrs:{color:"primary"},on:{click:function(e){t.colorDiag=!t.colorDiag}}},[t._v(" Close ")])],1)],1)],1)],1),n("v-btn",{attrs:{color:"primary",filled:""},on:{click:function(e){t.colorDiag=!0}}},[t._v("Change")])],1)],1),n("v-row",[n("v-col",{attrs:{align:"start",justify:"center"}},[n("p",{staticClass:"text"},[t._v("Enable Navigation Bar Image and Blur")])]),n("v-col",{attrs:{align:"end",justify:"center"}},[n("v-dialog",{attrs:{"max-width":"400"},model:{value:t.blurDiag,callback:function(e){t.blurDiag=e},expression:"blurDiag"}},[n("v-card",[n("v-card-title",[t._v(" Enable Navigation Bar Image and Blur ")]),n("v-card-text",[n("v-switch",{attrs:{dense:"",inset:"",color:"primary",value:t.$state.store.botSettings.navBlur,label:t.$state.store.botSettings.navBlur?" Disable":" Enable"},on:{click:t.enableBlur},model:{value:t.$state.store.botSettings.navBlur,callback:function(e){t.$set(t.$state.store.botSettings,"navBlur",e)},expression:"$state.store.botSettings.navBlur"}})],1)],1)],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.blurDiag=!0}}},[t._v(" Change ")])],1)],1)],1)],1)},T=[],I={props:{model:{type:String}},data:function(){return{activated:!1,colorDiag:!1,blurDiag:!1,accent:null,darkdiag:!1}},methods:{changeTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("themecache",JSON.stringify({dark:this.$vuetify.theme.dark,blur:this.$state.store.botSettings.navBlur,theme:{accent:this.$vuetify.theme.themes.light.primary}})),this.$state.store.botSettings.darkmode=this.$vuetify.theme.dark},enableBlur:function(){localStorage.setItem("themecache",JSON.stringify({dark:this.$vuetify.theme.dark,blur:this.$state.store.botSettings.navBlur,theme:{accent:this.$vuetify.theme.themes.light.primary}}))},emitNow:function(t,e){this.$bus.$emit(t,e)},changeAccent:function(){this.$vuetify.theme.themes.light.primary=this.accent.hex,this.$vuetify.theme.themes.dark.primary=this.accent.hex,localStorage.setItem("themecache",JSON.stringify({dark:this.$vuetify.theme.dark,blur:this.$state.store.botSettings.navBlur,theme:{accent:this.accent.hex}}))}},mounted:function(){var t=JSON.parse(localStorage.getItem("themecache"));t&&null!=t&&(this.$state.store.botSettings.darkmode=t.dark,this.$state.store.botSettings.navBlur=t.blur,this.$vuetify.theme.dark=t.dark,this.$vuetify.theme.themes.light.primary=t.theme.accent,this.$vuetify.theme.themes.dark.primary=t.theme.accent)}},P=I,A=n("288c"),D=n("b0af"),E=n("99d9"),L=n("62ad"),M=n("03a4"),F=n("169a"),N=n("da13"),W=n("5d23"),z=n("34c3"),K=n("0fd9"),U=n("8dd9"),G=n("b73d"),J=Object(d["a"])(P,B,T,!1,null,null,null),H=J.exports;m()(J,{VBottomSheet:A["a"],VBtn:p["a"],VCard:D["a"],VCardActions:E["a"],VCardText:E["c"],VCardTitle:E["d"],VCol:L["a"],VColorPicker:M["a"],VDialog:F["a"],VIcon:g["a"],VListItem:N["a"],VListItemContent:W["a"],VListItemIcon:z["a"],VListItemSubtitle:W["b"],VListItemTitle:W["c"],VRow:K["a"],VSheet:U["a"],VSpacer:y["a"],VSwitch:G["a"]});var R={components:{bottomSettings:H},data:function(){return{avatar:"https://i.ibb.co/9YwxPwZ/IMG-20191218-222419-347.webp",navPaths:[{icon:"mdi-home",title:"Home",subtitle:"Home",link:"/"},{icon:"mdi-information",title:"About",subtitle:"About Me",link:"/about"},{icon:"mdi-blogger",title:"Blog",subtitle:"My Personal Blog",link:"/blog"},{icon:"mdi-notebook-multiple",title:"Projects",subtitle:"Currently Working Projects and Issues",link:"/projects"},{icon:"mdi-web",title:"Careers",subtitle:"Careers",link:"/careers"},{icon:"mdi-google-photos",title:"Gallery",subtitle:"My Photography Skills",link:"/gallery"},{icon:"mdi-folder-information",title:"About this Project",subtitle:"Know the Code, workings of this Website",link:"/about-this-project"}],siteStats:[{name:"Bundle Stats",icon:"mdi-bag-checked",link:"/stats/bundle-analyzer.json",tooltip:"Website Bundle Statistics in JSON Data"},{name:"Bundle Analysis",icon:"mdi-bag-carry-on-check",link:"/stats/bundle-analyzer.html",tooltip:"Visualization of Website Bundle Statistics"},{name:"UI Stats",icon:"mdi-database-check",link:"/stats/ui-stats.json",tooltip:"Website UI Statistics in JSON Data"},{name:"UI Analysis",icon:"mdi-eye-check-outline",link:"/stats/ui-stats.html",tooltip:"Visualization of Website Bundle Statistics"},{name:"Size Analysis",icon:"mdi-progress-check",link:"/stats/size-analysis.txt",tooltip:"Size Analysis for this Website"},{name:"Sitemap",icon:"mdi-map-check-outline",link:"/sitemap.xml",tooltip:"Sitemap of the Website"}]}},methods:{windowClick:function(t){window.open(t)},routerPush:function(t){this.$router.push(t)}},computed:{drawerBackImg:function(){return this.$vuetify.theme.dark?"https://i.ibb.co/p3Tgrt6/download-force-true-w-1920.jpg":"https://i.ibb.co/bKsBjMj/download-force-true-w-2400.jpg"}}},q=R,Y=n("a523"),Z=n("ce7e"),Q=n("cd55"),X=n("49e2"),tt=n("c865"),et=n("0393"),nt=n("8860"),at=n("1baa"),it=n("f774"),ot=Object(d["a"])(q,$,O,!1,null,null,null),rt=ot.exports;m()(ot,{VAvatar:b["a"],VContainer:Y["a"],VDivider:Z["a"],VExpansionPanel:Q["a"],VExpansionPanelContent:X["a"],VExpansionPanelHeader:tt["a"],VExpansionPanels:et["a"],VIcon:g["a"],VImg:k["a"],VList:nt["a"],VListItem:N["a"],VListItemContent:W["a"],VListItemGroup:at["a"],VListItemIcon:z["a"],VListItemSubtitle:W["b"],VListItemTitle:W["c"],VNavigationDrawer:it["a"],VRow:K["a"],VSpacer:y["a"],VTooltip:_["a"]});var st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"non-touch",attrs:{elevation:"22",inset:"",dense:"",small:"",rounded:""}},[n("v-row",{staticClass:"my-1 py-0",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"my-1 py-0",attrs:{cols:t.ismobile?12:4}},[n("v-row",[n("v-col",{staticClass:"ma-1 my-0 py-0",attrs:{align:t.ismobile?"center":"start",justify:"center"}},[t.ismobile?t._e():n("v-row",{attrs:{align:t.ismobile?"center":"start",justify:t.ismobile?"center":"start"}},[n("div",{staticClass:"text ml-4 my-0 py-0 font-weight-bold non-touch"},[t._v(" Follow Me on: ")])]),n("v-row",{attrs:{align:t.ismobile?"center":"start",justify:t.ismobile?"center":"start"}},t._l(t.socials,(function(e,a){return n("v-tooltip",{key:a,attrs:{top:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,o=a.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",color:"primary"},on:{click:function(n){return t.windowLink(e.link)}}},"v-btn",o,!1),i),[n("v-icon",[t._v(t._s(e.icon))])],1)]}}],null,!0)},[n("span",[t._v(t._s(e.title))])])})),1)],1)],1)],1),n("v-col",{staticClass:"my-0 py-0",attrs:{cols:t.ismobile?12:4,align:"center"}},[n("div",{staticClass:"text"},[n("div",{staticClass:"grey--text text-overline my-0 py-0"},[t._v(" Portfolio Website ")]),n("div",{staticClass:"text-caption my-0 py-0"},[t._v("Powered by")]),n("v-tooltip",{attrs:{top:"",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("div",t._g(t._b({staticClass:"grey--text text-overline my-0 py-0",on:{click:function(e){return t.$router.push("/about-this-project")}}},"div",i,!1),a),[t._v(" Vuetify, Vuejs and More "),n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-heart")])],1)]}}])},[n("span",[t._v(" Know More About this Project, its Code and its Working ")])])],1)]),n("v-col",{staticClass:"my-0 py-0",attrs:{cols:t.ismobile?12:4}},[n("v-row",{staticClass:"my-0 mt-1 py-0"},[n("v-col",{staticClass:"my-0 py-0 text-caption",attrs:{align:t.ismobile?"center":"right"}},[t._v(" Designed and Developed by ")])],1),n("v-row",[n("v-col",{staticClass:"my-0 mb-1 py-0",attrs:{align:t.ismobile?"center":"end",justify:"center"}},[n("div",{class:"font-weight-black text-capitalize"+(t.ismobile?" text-center":"")},[n("span",{staticClass:"point-cursor",on:{click:function(e){return t.windowLink(t.github.link)}}},[t._v(" "+t._s(t.animatedArray.name.trim()+".TK")+" ")]),t._v(" | "),n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-copyright")]),t._v(" "+t._s((new Date).getFullYear())+" ")],1)])],1)],1)],1)],1)},ct=[],lt=(n("4160"),n("c975"),n("d81d"),n("159b"),n("ade3")),ut=n("fec8"),dt={data:function(){return{now:(new Date).toLocaleTimeString(),clockDiag:!1,animatedArray:{name:""},github:{link:"https://github.com/tks18"},socials:[{icon:"mdi-twitter",title:"Twitter",link:"https://twitter.com/shantk18"},{icon:"mdi-instagram",title:"Instagram",link:"https://instagram.com/shantk18"},{icon:"mdi-github",title:"Github",link:"https://github.com/tks18"},{icon:"mdi-gitlab",title:"Gitlab",link:"https://gitlab.com/tks18"},{icon:"mdi-bitbucket",title:"Bit Bucket",link:"https://bitbucket.org/Shan-tk/"},{icon:"mdi-quality-medium",title:"Medium",link:"https://medium.com/@tksudharshan"},{icon:"mdi-email-edit",title:"Email Me",link:"mailto:tksudharshan@infozy.tk"},{icon:"mdi-google-photos",title:"Photography",link:"https://unsplash.com/@shantk18"}]}},methods:{windowLink:function(t){window.open(t)},update:function(t,e){var n="";t.forEach((function(t){n+=ut["a"][Math.round(t)%ut["a"].length]})),this.$set(this.animatedArray,e,n)},transitWord:function(t,e,n){var a=this,i=this.$gsap.timeline({repeat:-1,yoyo:!0,repeatDelay:2,onUpdate:function(){a.update(e,n)}});t.forEach((function(t,n){var a;i.to(e,(a={},Object(lt["a"])(a,n,2*ut["a"].length+t),Object(lt["a"])(a,"ease","power4"),Object(lt["a"])(a,"duration",n/4+1),a),0)}))}},computed:{ismobile:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;return!(t>966)},nameMap:function(){return{initial:[ut["a"].indexOf("s"),ut["a"].indexOf("h"),ut["a"].indexOf("a"),ut["a"].indexOf("n"),ut["a"].indexOf(" "),ut["a"].indexOf(" "),ut["a"].indexOf(" "),ut["a"].indexOf(" "),ut["a"].indexOf(" "),ut["a"].indexOf(" ")],map:[ut["a"].indexOf("s"),ut["a"].indexOf("u"),ut["a"].indexOf("d"),ut["a"].indexOf("h"),ut["a"].indexOf("a"),ut["a"].indexOf("r"),ut["a"].indexOf("s"),ut["a"].indexOf("h"),ut["a"].indexOf("a"),ut["a"].indexOf("n")]}}},mounted:function(){this.transitWord(this.nameMap.map,this.nameMap.initial,"name")}},vt=dt,mt=n("553a"),ft=Object(d["a"])(vt,st,ct,!1,null,null,null),ht=ft.exports;m()(ft,{VBtn:p["a"],VCol:L["a"],VFooter:mt["a"],VIcon:g["a"],VRow:K["a"],VTooltip:_["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{class:(t.endofPage?"fab-button-bottom":"fab-button")+(t.$vuetify.theme.dark?" grad-back-dark":" grad-back-light"),attrs:{bottom:!0,absolute:!0,fixed:!0,right:!0,rounded:"",fab:""},on:{click:function(e){t.fab=!t.fab}}},[n("v-icon",[t._v("mdi-tune")])],1),n("v-dialog",{attrs:{"max-width":"400"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-card",[n("v-card-title",[t._v("Quick Actions")]),n("v-card-text",{staticClass:"text-center"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",[n("musicPlayer")],1),n("v-col",[n("bottomSettings",{attrs:{model:"icon"}})],1)],1)],1)],1)],1)],1)},pt=[],gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-sheet",{attrs:{inset:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-card",t._g(t._b({staticClass:"ma-1 pa-2 non-touch point-cursor",attrs:{elevation:"0"}},"v-card",i,!1),a),[n("v-row",{staticClass:"mb-2",attrs:{align:"center",justify:"center"}},[n("v-btn",t._g(t._b({attrs:{fab:"",small:"",color:"primary"}},"v-btn",i,!1),a),[n("v-icon",[t._v("mdi-music")])],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"text font-weight-semibold"},[t._v("Music Player")])])],1)]}}]),model:{value:t.activated,callback:function(e){t.activated=e},expression:"activated"}},[n("v-card",{attrs:{tile:""}},[n("v-progress-linear",{staticClass:"my-0",attrs:{value:50,height:"3"}}),n("v-list",[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("The Walker")]),n("v-list-item-subtitle",[t._v("Fitz & The Trantrums")])],1),n("v-spacer"),n("v-list-item-icon",[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-rewind")])],1)],1),n("v-list-item-icon",{class:{"mx-5":t.$vuetify.breakpoint.mdAndUp}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-pause")])],1)],1),n("v-list-item-icon",{staticClass:"ml-0",class:{"mr-3":t.$vuetify.breakpoint.mdAndUp}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-fast-forward")])],1)],1)],1)],1)],1)],1)},kt=[],yt={props:{model:{type:Boolean}},data:function(){return{activated:!1}}},wt=yt,_t=n("8e36"),xt=Object(d["a"])(wt,gt,kt,!1,null,null,null),St=xt.exports;m()(xt,{VBottomSheet:A["a"],VBtn:p["a"],VCard:D["a"],VIcon:g["a"],VList:nt["a"],VListItem:N["a"],VListItemContent:W["a"],VListItemIcon:z["a"],VListItemSubtitle:W["b"],VListItemTitle:W["c"],VProgressLinear:_t["a"],VRow:K["a"],VSpacer:y["a"]});var Ct={components:{musicPlayer:St,bottomSettings:H},data:function(){return{fab:!1,endofPage:!1}},methods:{scroll:function(){var t=this;window.onscroll=function(){var e=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight;t.endofPage=e}}},computed:{ismobile:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;return!(t>966)}},mounted:function(){this.scroll()}},Vt=Ct,jt=Object(d["a"])(Vt,bt,pt,!1,null,null,null),$t=jt.exports;m()(jt,{VBtn:p["a"],VCard:D["a"],VCardText:E["c"],VCardTitle:E["d"],VCol:L["a"],VDialog:F["a"],VIcon:g["a"],VRow:K["a"]});var Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-system-bar",{attrs:{fixed:"",window:"","lights-out":""},on:{click:function(e){return t.$vuetify.goTo(0)}}},[n("v-spacer"),t.$vuetify.theme.dark?t._e():n("v-snackbar",{attrs:{"multi-line":"",timeout:6e3},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[n("v-btn",t._b({attrs:{color:"primary"},on:{click:function(e){t.snackbar=!1}}},"v-btn",a,!1),[t._v(" Close ")])]}}],null,!1,536044565),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" Dark Mode Available Now ! Turn on Using Settings in the Nav-bar. ")]),n("v-icon",[t._v(" mdi-wifi-strength-4 ")]),n("span",{staticClass:"non-touch point-cursor"},[t._v(" "+t._s(t._f("moment")(t.now,"h:mm:ss a"))+" ")])],1)},Bt=[],Tt={data:function(){return{now:Date.now(),snackbar:!0}},methods:{scrollTop:function(){window.scrollTo(0,0)}},mounted:function(){var t=this;setInterval((function(){t.now=Date.now()}),1e3)}},It=Tt,Pt=n("2db4"),At=n("afd9"),Dt=Object(d["a"])(It,Ot,Bt,!1,null,null,null),Et=Dt.exports;m()(Dt,{VBtn:p["a"],VIcon:g["a"],VSnackbar:Pt["a"],VSpacer:y["a"],VSystemBar:At["a"]});var Lt={name:"App",metaInfo:{title:"Sudharshan TK",titleTemplate:function(t){return"Sudharshan TK"==t?t:"".concat(t,"Careers"==t?" @ Sudharshan TK":" | Sudharshan TK")}},components:{navbar:j,navDrawer:rt,foot:ht,fabComponent:$t,sysBar:Et},methods:{}},Mt=Lt,Ft=n("7496"),Nt=n("f6c4"),Wt=Object(d["a"])(Mt,o,r,!1,null,null,null),zt=Wt.exports;m()(Wt,{VApp:Ft["a"],VMain:Nt["a"]});var Kt=a["default"].observable({navbar:{active:!1},botSettings:{darkmode:!1,navBlur:!1}}),Ut={navbar:{key:function(){return Kt.navbar.key},active:function(){return Kt.navbar.active}},botSettings:{darkmode:function(){return Kt.botSettings.darkmode},navBlur:function(){return Kt.botSettings.navBlur}}},Gt={navbar:{key:function(t){return Kt.navbar.key=t},active:function(t){return Kt.navbar.active=t}},botSettings:{darkmode:function(t){return Kt.botSettings.darkmode=t},navBlur:function(t){return Kt.botSettings.navBlur=t}}},Jt=Kt,Ht=new a["default"],Rt=n("8c4f"),qt=n("3384"),Yt=n.n(qt),Zt=n("e36f"),Qt=[{path:"/",name:"Home",component:Zt("home")},{path:"/blog",name:"Blog",component:Zt("blog")},{path:"/careers",name:"Careers",component:Zt("careers")},{path:"/gallery",name:"Gallery",component:Zt("gallery")},{path:"/about",name:"About",component:Zt("about")},{path:"/about-this-project",name:"This-project",component:Zt("this-project")}],Xt=Qt;a["default"].use(Rt["a"]);var te=new Rt["a"]({scrollBehavior:function(t,e,n){var a=0;return t.hash?a=t.hash:n&&(a=n.y),Yt()(a)},mode:"history",routes:Xt}),ee=te,ne=n("2ead"),ae=n.n(ne),ie=n("2ef0"),oe=n.n(ie),re=n("bc3a"),se=n.n(re),ce=n("7212"),le=n.n(ce),ue=n("f309"),de=n("21eb"),ve=n.n(de);a["default"].use(ue["a"]);var me,fe=new ue["a"]({theme:{themes:{light:{primary:"#F44336",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},dark:{primary:"#F44336",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}},options:{minifyTheme:ve.a}}}),he=n("cffa"),be=(n("9c6c"),n("acfa"));"serviceWorker"in navigator?(me=new be["a"]("".concat("","worker.js")),me.addEventListener("controlling",(function(){window.location.reload()})),me.addEventListener("activated",(function(t){t.isUpdate||console.log("%cDone:","background: #4BB543; font-weight: bold"," Thanks for Trying Out My App\nThis app has been Successfully Installed.")})),me.register()):me=null;var pe=me;a["default"].use(le.a),a["default"].use(ae.a),a["default"].use(i["a"],{tagIDKeyName:"sh-tk-id",refreshOnceOnNavigation:!0}),a["default"].config.productionTip=!1,a["default"].prototype.$axios=se.a,a["default"].prototype.$worker=pe,a["default"].prototype.$gsap=he["a"],a["default"].prototype.$bus=Ht,a["default"].prototype.$state={store:Jt,mutate:Gt,get:Ut},a["default"].prototype.$_=oe.a,new a["default"]({vuetify:fe,router:ee,render:function(t){return t(zt)}}).$mount("#app")},"9c6c":function(t,e,n){},"9dac":function(t,e,n){var a={"./about":["754b","chunk-32216c46","chunk-95b4789e","chunk-65befef4"],"./about.vue":["754b","chunk-32216c46","chunk-95b4789e","chunk-65befef4"],"./blog":["68b7","chunk-32216c46","chunk-2d0d0b4d"],"./blog.vue":["68b7","chunk-32216c46","chunk-2d0d0b4d"],"./careers":["8473","chunk-32216c46","chunk-2d0ddfce"],"./careers.vue":["8473","chunk-32216c46","chunk-2d0ddfce"],"./gallery":["f115","chunk-32216c46","chunk-2d22bce5"],"./gallery.vue":["f115","chunk-32216c46","chunk-2d22bce5"],"./home":["6511","chunk-32216c46","chunk-6fbb257b","chunk-347d31b3"],"./home.vue":["6511","chunk-32216c46","chunk-6fbb257b","chunk-347d31b3"],"./this-project":["f0f7","chunk-32216c46","chunk-2d22bf91"],"./this-project.vue":["f0f7","chunk-32216c46","chunk-2d22bf91"]};function i(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],i=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id="9dac",t.exports=i},e36f:function(t,e,n){n("d3b7"),t.exports=function(t){return function(){return n("9dac")("./"+t)}}},fec8:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u}));n("99af"),n("ac1f"),n("1276");var a=n("2ef0"),i="😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 🚶🏻 🚶🏻‍♂️ 🚶🏻‍♀️ 🧍🏻 🧍🏻‍♂️ 🧍🏻‍♀️ 🧎🏻 🧎🏻‍♂️ 🧎🏻‍♀️",o="😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 🤯 🤔 🤭 🤫 😨 🤗 🥱 😴 🤤 😪 😵 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🧠 👀 👁 🙅‍♂️ 🙅‍♀️ 🙆 🙆‍♂️ 🙆‍♀️ 💁 💁‍♂️ 💁‍♀️ 🙋 🙋‍♂️ 🙋‍♀️ 🤷 🤷‍♂️ 🤷‍♀️ 🚶 🚶‍♂️ 🚶‍♀️ 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 🏃 🏃‍♂️ 🏃‍♀️ 💃 🕺 🕴 🧳 🌂 ☂️ 🧵 🧶 👓 🕶 🥽 🤸🏻 🤸🏻‍♂️ 🤸🏻‍♀️ 👨🏽‍💻 👩🏽‍💻 💣 🧨 🔮 ❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 ❣️ 💕 💞 💓 💗 💖 💘 💝 👏 🙌 👐 🤲 🤝 🙏 💯",r="?><{}|//~-#.+abcdefghijklmnopqrstuvwxyz$#@!() *&^][",s={emoji:i.split(" "),letters:r.split(""),safeEmojis:o.split(" ")},c=s.emoji.concat(s.letters),l=(Object(a["shuffle"])(s.emoji),Object(a["shuffle"])(s.safeEmojis)),u=Object(a["shuffle"])(s.letters);Object(a["shuffle"])(c)}});
//# sourceMappingURL=app.0b60af12.js.map