!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(11)},function(e,t,n){Nova.booting(function(e,t){t.addRoutes([{name:"novassport.authorized_apps",path:"/novassport/authorized-apps",component:n(2)}])})},function(e,t,n){var r=n(8)(n(9),n(10),!1,function(e){n(3)},"data-v-377dcad3",null);e.exports=r.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("0dee6b4a",r,!0,{})},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".action-link[data-v-377dcad3]{cursor:pointer}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(7),s={},i=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,d=function(){},f=null,l="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(m(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+l+'~="'+e.id+'"]');if(r){if(u)return d;r.parentNode.removeChild(r)}if(p){var o=c++;r=a||(a=h()),t=y.bind(null,r,o,!1),n=y.bind(null,r,o,!0)}else r=h(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);f.ssrId&&e.setAttribute(l,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){u=n,f=r||{};var i=o(e,t);return v(i),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r];(c=s[a.id]).refs--,n.push(c)}t?v(i=o(e,t)):i=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete s[c.id]}}}};var g,_=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],a={id:e+":"+o,css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,s){var i,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,a=e.default);var u,d="function"==typeof a?a.options:a;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=u):r&&(u=r),u){var f=d.functional,l=f?d.render:d.beforeCreate;f?(d._injectStyles=u,d.render=function(e,t){return u.call(t),l(e,t)}):d.beforeCreate=l?[].concat(l,u):[u]}return{esModule:i,exports:a,options:d}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tokens:[]}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens()},getTokens:function(){var e=this;axios.get("/oauth/tokens").then(function(t){e.tokens=t.data})},revoke:function(e){var t=this;axios.delete("/oauth/tokens/"+e.id).then(function(e){t.getTokens()})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("heading",{staticClass:"mb-3"},[e._v("Authorized Apps")]),e._v(" "),n("card",[n("table",{staticClass:"table table-borderless mb-0",attrs:{width:"100%"}},[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("Name")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("Scopes")]),e._v(" "),n("th")])]),e._v(" "),n("tbody",e._l(e.tokens,function(t){return n("tr",[n("td",{staticStyle:{"vertical-align":"middle"}},[n("strong",[e._v(e._s(t.client.name))])]),e._v(" "),n("td",{staticStyle:{"vertical-align":"middle"}},[t.scopes.length>0?n("span",[e._v("\n                            "+e._s(t.scopes.join(", "))+"\n                        ")]):e._e()]),e._v(" "),n("td",{staticStyle:{"vertical-align":"middle"}},[n("a",{staticClass:"action-link text-danger",on:{click:function(n){e.revoke(t)}}},[e._v("\n                            Revoke\n                        ")])])])}))])])],1)},staticRenderFns:[]}},function(e,t){}]);