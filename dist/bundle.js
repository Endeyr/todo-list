(()=>{"use strict";var n={917:(n,t,e)=>{e.d(t,{Z:()=>o});var r=e(645),a=e.n(r)()((function(n){return n[1]}));a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n",""]);const o=a},426:(n,t,e)=>{e.d(t,{Z:()=>o});var r=e(645),a=e.n(r)()((function(n){return n[1]}));a.push([n.id,":root {\n\t--dark: #374151;\n\t--darker: #1f2937;\n\t--darkest: #111827;\n\t--grey: #6b7280;\n\t--light: #eee;\n\t--pink: #ec4899;\n\t--purple: #8b5cf6;\n\t--primary: #ea40a4;\n\t--business: #3a82ee;\n\t--personal: var(--primary);\n\t--danger: #ff5b57;\n\t--shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n\t--business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);\n\t--personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);\n}\n\n* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 100vh;\n\tbackground: var(--dark);\n\tcolor: #fff;\n}\n\nheader {\n\tpadding: 2rem 1rem;\n\tmax-width: 800px;\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n\nheader h1 {\n\tfont-size: 2.5rem;\n\tfont-weight: 300;\n\tcolor: var(--grey);\n\tmargin-bottom: 1rem;\n}\n\n#new-task-form {\n\tdisplay: flex;\n}\n\ninput,\nbutton {\n\tappearance: none;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n}\n\n#new-task-input {\n\tflex: 1 1 0%;\n\tbackground-color: var(--darker);\n\tpadding: 1rem;\n\tborder-radius: 1rem;\n\tmargin-right: 1rem;\n\tcolor: var(--light);\n\tfont-size: 1.25rem;\n}\n\n#new-task-input::placeholder {\n\tcolor: var(--grey);\n}\n\n#new-task-submit {\n\tcolor: var(--pink);\n\tfont-size: 1.25rem;\n\tfont-weight: 700;\n\tbackground-image: linear-gradient(to right, var(--pink), var(--purple));\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n\tcursor: pointer;\n\ttransition: 0.4s;\n}\n\n#new-task-submit:hover {\n\topacity: 0.8s;\n}\n\n#new-task-submit:active {\n\topacity: 0.6s;\n}\n\nmain {\n\tflex: 1 1 0%;\n\tmax-width: 800px;\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n\nfooter {\n\theight: 7vh;\n\tcolor: white;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: absolute;\n\tmax-width: 100%;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\ttext-align: center;\n\tpadding: 0 1em;\n\tbox-sizing: border-box;\n}\n\nfooter a {\n\tcolor: var(--pink);\n}\n\n.task-list {\n\tpadding: 1rem;\n}\n\n.task-list h2 {\n\tfont-size: 1.5rem;\n\tfont-weight: 300;\n\tcolor: var(--grey);\n\tmargin-bottom: 1rem;\n}\n\n#tasks .task {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbackground-color: var(--darkest);\n\tpadding: 1rem;\n\tborder-radius: 1rem;\n\tmargin-bottom: 1rem;\n}\n\n#tasks .task .content {\n\tflex: 1 1 0%;\n}\n\n#tasks .task .content .text {\n\tcolor: var(--light);\n\tfont-size: 1.125rem;\n\twidth: 100%;\n\tdisplay: block;\n\ttransition: 0.4s;\n}\n\n#tasks .task .content .text:not(:read-only) {\n\tcolor: var(--pink);\n}\n\n#tasks .task .actions {\n\tdisplay: flex;\n\tmargin: 0 -0.5rem;\n}\n\n.task .actions button {\n\tcursor: pointer;\n\tmargin: 0 0.5rem;\n\tfont-size: 1.125rem;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n\ttransition: 0.4s;\n}\n\n.task .actions button:hover {\n\topacity: 0.8s;\n}\n\n.task .actions button:active {\n\topacity: 0.6s;\n}\n\n.task .actions .edit {\n\tbackground-image: linear-gradient(to right, var(--pink), var(--purple));\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n\n.task .actions .delete {\n\tcolor: crimson;\n}\n",""]);const o=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},379:(n,t,e)=>{var r,a=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),o=[];function i(n){for(var t=-1,e=0;e<o.length;e++)if(o[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},r=[],a=0;a<n.length;a++){var s=n[a],l=t.base?s[0]+t.base:s[0],d=e[l]||0,c="".concat(l," ").concat(d);e[l]=d+1;var u=i(c),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:c,updater:h(p,t),references:1}),r.push(c)}return r}function l(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,c=(d=[],function(n,t){return d[n]=t,d.filter(Boolean).join("\n")});function u(n,t,e,r){var a=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=c(t,a);else{var o=document.createTextNode(a),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(o,i[t]):n.appendChild(o)}}function p(n,t,e){var r=e.css,a=e.media,o=e.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(n,t){var e,r,a;if(t.singleton){var o=f++;e=m||(m=l(t)),r=u.bind(null,e,o,!1),a=u.bind(null,e,o,!0)}else e=l(t),r=p.bind(null,e,t),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else a()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var a=i(e[r]);o[a].references--}for(var l=s(n,t),d=0;d<e.length;d++){var c=i(e[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}e=l}}}}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(917);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var a=e(426);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;(()=>{let n=document.getElementById("content"),t=document.createElement("header");n.appendChild(t);let e=document.createElement("h1");e.innerText="To-Do",t.appendChild(e);let r=document.createElement("form");r.id="new-task-form",t.appendChild(r);let a=document.createElement("input");a.type="text",a.id="new-task-input",a.placeholder="What do you have planned?",r.appendChild(a);let o=document.createElement("input");o.type="submit",o.id="new-task-submit",o.value="Add task",r.appendChild(o);let i=document.createElement("main");n.appendChild(i);let s=document.createElement("section");s.classList="task-list",i.appendChild(s);let l=document.createElement("h2");l.innerText="Tasks",s.appendChild(l);let d=document.createElement("div");d.id="tasks",s.appendChild(d),document.querySelector("aside"),document.querySelector("footer")||(()=>{let n=document.createElement("footer"),t=document.createElement("p"),e=document.createElement("a"),r=document.createTextNode("Github");t.innerHTML="Created by Aaron Thompson. Find this project on ",e.innerHtml="",n.appendChild(t),t.appendChild(e),e.appendChild(r),e.title="Github",e.href="https://github.com/Endeyr/restaurantPage",document.querySelector("body").appendChild(n)})()})(),window.addEventListener("load",(()=>{let n=document.querySelector("#new-task-form"),t=document.querySelector("#new-task-input"),e=document.querySelector("#tasks");n.addEventListener("submit",(n=>{n.preventDefault();let r=t.value;if(!r)return void alert("Please fill out the task");let a=document.createElement("div");a.classList="task";let o=document.createElement("div");o.classList="content",a.appendChild(o);let i=document.createElement("input");i.classList="text",i.type="text",i.value=r,i.setAttribute("readonly","readonly"),o.appendChild(i);let s=document.createElement("div");s.classList="actions";let l=document.createElement("button");l.classList="edit",l.innerHTML="Edit";let d=document.createElement("button");d.classList="delete",d.innerHTML="Delete",s.appendChild(l),s.appendChild(d),a.appendChild(s),e.appendChild(a),t.value="",l.addEventListener("click",(()=>{"edit"==l.innerText.toLowerCase()?(i.removeAttribute("readonly"),i.focus(),l.innerText="Save"):(i.setAttribute("readonly","readonly"),l.innerText="Edit")})),d.addEventListener("click",(()=>{e.removeChild(a)}))}))})),window.addEventListener("load",(()=>{let n=JSON.parse(localStorage.getItem("todos"))||[];document.querySelector("#tasks").addEventListener("submit",(t=>{t.preventDefault();const e={text:t.target.elements.text.value};n.push(e),localStorage.setItem("todos",JSON.stringify(n)),t.target.reset()}))}))})()})();