(function(e){function t(t){for(var n,i,c=t[0],o=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var o=r[c];0!==s[o]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Moogle/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"18e9":function(e,t,r){"use strict";r("5e64")},2678:function(e,t,r){e.exports=r.p+"Search.svg"},"39e6":function(e,t,r){"use strict";r("668c")},"3ec4":function(e,t,r){},"4bf9":function(e,t,r){},"54bc":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=r("f355"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("Body",{staticClass:"main-margin",attrs:{api:e.api}})],1)},i=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("h1",{staticClass:"brand main-margin"},[e._v("Moogle!")]),r("Searcher")],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"searcher"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"input border",attrs:{type:"text",placeholder:"Search some music","aria-labelledby":"searchlabel"},domProps:{value:e.searchTerm},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)},input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}}),r("label",{staticClass:"invisible",attrs:{id:"searchlabel",for:"input"}},[e._v("Search some music")]),r("a",{on:{click:e.submit}},[e._m(0)])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon-frame border"},[n("img",{attrs:{src:r("2678"),alt:"search icon"}})])}],f=r("2f62");n["a"].use(f["a"]);var p=new f["a"].Store({state:{searchTerm:""},mutations:{update:function(e,t){e.searchTerm=t}}}),m={name:"Searcher",data:function(){return{searchTerm:""}},methods:{submit:function(){p.commit("update",this.searchTerm)}}},h=m,d=(r("7044"),r("2877")),b=Object(d["a"])(h,u,l,!1,null,"1686489c",null),v=b.exports,_={name:"Header",components:{Searcher:v}},g=_,y=(r("622e"),Object(d["a"])(g,c,o,!1,null,"42774ec4",null)),O=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body"},[n("div",{attrs:{id:"main-body"}},[e.hasResults()?n("Results",{attrs:{results:e.searchResults}}):e._e()],1),e.hasResults()?e._e():n("div",{attrs:{id:"ads-body"}},[void 0!==e.searchResults.error?n("ErrorMessage",{attrs:{error:e.searchResults.error}}):e._e(),n("img",{attrs:{src:r("ba7f"),alt:"search icon"}})],1)])},j=[],x=r("1da1"),k=(r("96cf"),r("841c"),r("ac1f"),r("b64b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.hasResults()?r("div",{staticClass:"results"},[e.results["artists"]?r("Collection",{attrs:{collection:e.results["artists"].items,type:"artists"}}):e._e(),e.results["albums"]?r("Collection",{attrs:{collection:e.results["albums"].items,type:"albums"}}):e._e(),e.results["tracks"]?r("Collection",{attrs:{collection:e.results["tracks"].items,type:"tracks"}}):e._e()],1):e._e(),e.hasResults()?e._e():r("div",{staticClass:"no-results"},[r("h2",[e._v("No results were found.")])])])}),C=[],R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{class:"collection "+e.type},e._l(e.collection,(function(e){return r("li",{key:e.id},[r("Card",{attrs:{card:e}})],1)})),0)},S=[],E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("h4",{staticClass:"title overflow",attrs:{title:e.card.name}},[e._v(e._s(e.card.name))]),r(e.fixTypeName(),{tag:"component",attrs:{info:e.card}})],1)},T=[],P=(r("fb6a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Picture",{attrs:{images:e.info.images,name:e.info.name+" members photo"}}),r("h5",{staticClass:"information"},[e._v("Popularity: "+e._s(e.info.popularity))])],1)}),$=[],M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[""!==e.getBestImage()?r("img",{staticClass:"picture",attrs:{src:e.getBestImage(),alt:e.name}}):e._e(),""===e.getBestImage()?r("svg",{staticClass:"emptyPicture",attrs:{title:"Image unavailable",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{x:"0",y:"0"}})]):e._e()])},A=[],B=(r("159b"),function(e,t){if(0===e.length)return"";var r=e[0].height,n=e[0].url;return e.forEach((function(e){(r>=e.height&&t<=e.height||r<e.height)&&(r=e.height,n=e.url)})),n}),I={name:"Picture",props:{images:Array,name:String},methods:{getBestImage:function(){return B(this.images,150)}}},U=I,z=(r("84a4"),Object(d["a"])(U,M,A,!1,null,"d5afa7b8",null)),N=z.exports,H={name:"Artist",components:{Picture:N},props:{info:Object}},J=H,D=(r("d4b9"),Object(d["a"])(J,P,$,!1,null,"7c16785e",null)),q=D.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Picture",{attrs:{images:e.info.images,name:e.info.name+" album cover"}}),r("h4",{staticClass:"information overflow",attrs:{title:e.info.artists[0].name}},[e._v(e._s(e.info.artists[0].name))]),r("h5",{staticClass:"information"},[e._v(e._s(e.info.release_date.substring(0,4)))])],1)},Y=[],F={name:"Album",components:{Picture:N},props:{info:Object}},G=F,K=(r("7da4"),Object(d["a"])(G,L,Y,!1,null,"30a4afa2",null)),Q=K.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Picture",{attrs:{images:e.info.album.images,name:e.info.name+" track picture"}}),r("h5",{staticClass:"information overflow",attrs:{title:e.info.artists[0].name}},[e._v(e._s(e.info.artists[0].name))]),r("h5",{staticClass:"information overflow",attrs:{title:"Runtime:"+e.formatRuntime()}},[e._v("Runtime: "+e._s(e.formatRuntime()))])],1)},W=[],X={name:"Song",components:{Picture:N},props:{info:Object},methods:{formatRuntime:function(){return new Date(this.info.duration_ms).toISOString().slice(11,-5)}}},Z=X,ee=(r("e202"),Object(d["a"])(Z,V,W,!1,null,"412aa3ec",null)),te=ee.exports,re={name:"Card",components:{Artist:q,Album:Q,Song:te},props:{card:Object},methods:{fixTypeName:function(){return"track"===this.card.type?"Song":this.capitalize(this.card.type)},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}},ne=re,se=(r("39e6"),Object(d["a"])(ne,E,T,!1,null,"72529635",null)),ae=se.exports,ie={components:{Card:ae},name:"Collection",props:{collection:Array,type:String}},ce=ie,oe=(r("18e9"),Object(d["a"])(ce,R,S,!1,null,"29dd8cec",null)),ue=oe.exports,le={components:{Collection:ue},name:"Results",props:{results:Object},methods:{hasResults:function(){return this.results.albums.total+this.results.artists.total+this.results.tracks.total!==0}}},fe=le,pe=(r("f28a"),Object(d["a"])(fe,k,C,!1,null,"321460e4",null)),me=pe.exports,he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return void 0!==e.error?r("div",[401===e.error.status?r("h2",[e._v(" Your session has expired. Click "),r("a",{attrs:{href:"/"}},[e._v("here")])]):e._e(),401!==e.error.status?r("h2",[e._v(' Ups, there were an error: "'+e._s(e.error.message)+'". ')]):e._e()]):e._e()},de=[],be={name:"ErrorMessage",props:{error:{}}},ve=be,_e=Object(d["a"])(ve,he,de,!1,null,"7973ab36",null),ge=_e.exports,ye={name:"Body",components:{Results:me,ErrorMessage:ge},props:{api:{type:Object}},data:function(){return{searchResults:{}}},computed:Object(f["b"])(["searchTerm"]),created:function(){var e=this;this.unsubscribe=p.subscribe((function(t){"update"===t.type&&e.search()}))},beforeDestroy:function(){this.unsubscribe()},methods:{search:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.api.search(p.state.searchTerm);case 2:e.searchResults=t.sent;case 3:case"end":return t.stop()}}),t)})))()},hasResults:function(){return 0!==Object.keys(this.searchResults).length&&void 0===this.searchResults.error}}},Oe=ye,we=(r("6dc0"),Object(d["a"])(Oe,w,j,!1,null,null,null)),je=we.exports,xe={name:"App",components:{Header:O,Body:je},props:{api:{type:Object}}},ke=xe,Ce=(r("5c0b"),Object(d["a"])(ke,a,i,!1,null,null,null)),Re=Ce.exports,Se=r("d4ec"),Ee=r("bee2"),Te=(r("498a"),r("d3b7"),function(){function e(t,r){Object(Se["a"])(this,e),this.url=t,this.accessToken=r}return Object(Ee["a"])(e,[{key:"search",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var r,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.trim(),""!==r){e.next=3;break}return e.abrupt("return",{});case 3:return n=this.accessToken.Token,s=this._buildUrl(r),e.abrupt("return",fetch(s,{headers:{Authorization:"Bearer "+n}}).then((function(e){return e.json()})).catch((function(e){return{error:{message:e.message}}})));case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_buildUrl",value:function(e){var t=encodeURIComponent(e),r=this.url+"search?q="+t+"&type=album,artist,track";return r}}]),e}()),Pe=(r("2b3d"),r("3ca3"),r("ddb0"),function(){function e(t){Object(Se["a"])(this,e);var r=t.hash.substring(1);this.Token=new URLSearchParams(r).get("access_token")}return Object(Ee["a"])(e,[{key:"isEmpty",value:function(){return null===this.Token}}]),e}());n["a"].config.productionTip=!1;var $e=new Pe(window.location);$e.isEmpty()?window.location.href=s["a"]:new n["a"]({store:p,render:function(e){return e(Re,{props:{api:new Te(s["b"],$e)}})}}).$mount("#app")},5803:function(e,t,r){},"5c0b":function(e,t,r){"use strict";r("9c0c")},"5e64":function(e,t,r){},"5e71":function(e,t,r){},"622e":function(e,t,r){"use strict";r("9a09")},"668c":function(e,t,r){},"6dc0":function(e,t,r){"use strict";r("5e71")},7044:function(e,t,r){"use strict";r("e9ee")},"7da4":function(e,t,r){"use strict";r("4bf9")},"84a4":function(e,t,r){"use strict";r("5803")},"9a09":function(e,t,r){},"9c0c":function(e,t,r){},ae97:function(e,t,r){},ba7f:function(e,t,r){e.exports=r.p+"Cow.svg"},d4b9:function(e,t,r){"use strict";r("3ec4")},e202:function(e,t,r){"use strict";r("ae97")},e9ee:function(e,t,r){},f28a:function(e,t,r){"use strict";r("54bc")},f355:function(e){e.exports=JSON.parse('{"b":"https://api.spotify.com/v1/","a":"https://accounts.spotify.com/authorize?response_type=token&redirect_uri=https://educorzo.github.io/Moogle/&client_id=0088361d36ae4c6c8e4efe3b5e6b89d7"}')}});
//# sourceMappingURL=app.js.map