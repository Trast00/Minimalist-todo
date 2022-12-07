"use strict";(self.webpackChunkminimalist_todo=self.webpackChunkminimalist_todo||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  background-color: #f6f6f6;\r\n  font-family: "Inter var", sans-serif;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\nmain {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  min-height: 220px;\r\n  margin: 8px;\r\n  border-radius: 4px;\r\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* Title */\r\n\r\n.title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 16px;\r\n}\r\n\r\nh1 {\r\n  font-weight: 500;\r\n  font-size: 1.3rem;\r\n}\r\n\r\ni {\r\n  color: #c1c1c1;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Form and Input : List of task */\r\n.addtask {\r\n  width: 100%;\r\n  border: none;\r\n  padding: 16px;\r\n  font-size: 1.125rem;\r\n  border-top: 1px solid rgba(193, 193, 193, 0.4);\r\n}\r\n\r\n.addtask:focus {\r\n  outline: none;\r\n}\r\n\r\n#list-task {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-content: center;\r\n  padding: 16px;\r\n  border-top: 1px solid rgba(193, 193, 193, 0.4);\r\n  background-color: white;\r\n}\r\n\r\n.task .task-content {\r\n  width: 90%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.task .task-content input[type="checkbox"] {\r\n  width: 15px;\r\n  height: 15px;\r\n  margin-right: 12px;\r\n}\r\n\r\n.task .task-content .task-description {\r\n  width: 100%;\r\n  border: none;\r\n  font-size: 1.125rem;\r\n  background: none;\r\n}\r\n\r\n.task .task-content .task-description:focus {\r\n  outline: none;\r\n}\r\n\r\n#btn-clear-task {\r\n  width: 100%;\r\n  height: 60px;\r\n  font-weight: 500;\r\n  color: rgb(153, 152, 152);\r\n  cursor: pointer;\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid rgba(193, 193, 193, 0.4);\r\n  border-bottom: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  bottom: 0;\r\n  position: relative;\r\n}\r\n',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=i(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=r(n,i),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},16:(n,e,t)=>{var r=t(379),i=t.n(r),o=t(795),a=t.n(o),s=t(569),c=t.n(s),d=t(565),l=t.n(d),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(426),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),i()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;class v{constructor(n,e=!1,t){this.description=n,this.completed=e,this.index=t}}const b=new class{constructor(){this.list=[]}add=(n,e=!1,t=this.list.length+1)=>{const r=new v(n,e,t);this.list.push(r),this.display(r)};display=n=>{const e=document.getElementById("list-task"),t=document.createElement("li");t.classList.add("task"),t.id=n.index;const r=document.createElement("div");r.classList.add("task-content");const i=document.createElement("input");i.type="checkbox",i.name=n.index;const o=document.createElement("input");o.classList.add("task-description"),o.value=n.description,o.type="text",i.addEventListener("change",(n=>{const{id:e}=n.currentTarget.parentElement.parentElement;n.currentTarget.checked?(n.currentTarget.nextSibling.style.textDecoration="line-through",this.list[e-1].completed=!0):(n.currentTarget.nextSibling.style.textDecoration="none",this.list[e-1].completed=!1)})),n.completed&&i.click(),o.addEventListener("focus",(n=>{const{id:e}=n.currentTarget.parentElement.parentElement;document.getElementById(e).style.backgroundColor="rgb(156, 156, 255)";const t=n.currentTarget.parentElement.nextSibling,r=n.currentTarget.parentElement.nextSibling.nextSibling;t.classList.remove("hidden"),r.classList.add("hidden")})),o.addEventListener("focusout",(n=>{const{id:e}=n.currentTarget.parentElement.parentElement;document.getElementById(e).style.backgroundColor="white",this.list[e-1].description=n.currentTarget.value;const t=n.currentTarget.parentElement.nextSibling,r=n.currentTarget.parentElement.nextSibling.nextSibling;setTimeout((()=>{r.classList.remove("hidden"),t.classList.add("hidden")}),200)})),r.append(i),r.append(o);const a=document.createElement("i");a.classList.add("fa-solid","fa-ellipsis-vertical");const s=document.createElement("i");s.classList.add("fa-solid","fa-trash","hidden"),s.addEventListener("click",(n=>{const{id:e}=n.currentTarget.parentElement;this.delete(e)})),t.append(r),t.append(s),t.append(a),e.append(t)};delete=n=>{this.list=this.list.filter((e=>e.index!==this.list[n-1].index)),document.getElementById(n).remove(),this.updateIndexs()};updateIndexs=()=>{let n=1;this.list.forEach((e=>{document.getElementById(e.index).id=n,e.index=n,n+=1}))}},x=document.forms[0];x.addEventListener("submit",(n=>{n.preventDefault(),0!==x.newtask.value.length&&(b.add(x.newtask.value),x.newtask.value="")})),window.addEventListener("beforeunload",(()=>{const n={currentDescription:x.newtask.value,list:b.list};window.localStorage.setItem("SavedData",JSON.stringify(n))})),window.addEventListener("load",(()=>{const n=JSON.parse(window.localStorage.getItem("SavedData"));null!=n.currentDescription&&(x.newtask.value=n.currentDescription),null!=n.list&&n.list.forEach((n=>{b.add(n.description,n.completed,n.index)}))}))}},n=>{n(n.s=16)}]);