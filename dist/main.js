(()=>{"use strict";var e={222:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),l=n.n(c),s=new URL(n(60),n.b),d=i()(o()),u=l()(s);d.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    min-width: 565px;\n}\n\nul {\n    list-style-type: none;\n}\n\n#headerBarChangeLocation:hover, #headerBarSettings:hover, .navBarButton:hover,\n#settingsOverlayCloseButton:hover {\n    cursor: pointer;\n}\n\n@font-face {\n    font-family: 'TitleFont';\n    src: url(${u}) format('truetype');\n    font-style: normal;\n}\n\n/* #region Header Bar */\n#headerBar, #headerBarFarRightSide {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: rgb(121, 198, 231);\n    height: 10%;\n}\n\n#headerBar {\n    padding-left: 2rem;\n}\n\n#headerBarTitle {\n    font-family: 'TitleFont';\n    font-size: 3rem;\n    min-width: 370px;\n}\n\n#headerBarFarRightSide {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    padding-right: 2rem;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n#headerBarCenter {\n    display: flex;\n    align-items: center;\n    height: 100%;\n}\n\n#headerBarChangeLocation {\n    height: 70%;\n}\n\n#headerBarSettings {\n    padding-left: 50px;\n    height: 70%;\n}\n/* #endregion */\n\n/* #region Nav Bar */\n#navBar {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgb(216, 231, 121);\n    height: 5%;\n    gap: 2rem;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n/* #endregion */\n\n/* #region Card Select Bar */\n#cardSelectBar {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background: rgb(121, 231, 138);\n    height: 5%;\n    gap: 2rem;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n/* #endregion */\n\n/* #region Main Window */\n#contentWindow {\n    display: flex;\n    height: 85%;\n    justify-content: center;\n    align-items: center;\n    gap: 1.6rem;\n    background: url('https://media0.giphy.com/media/uqpK3SuxEY4W9YQvdg/giphy.gif?cid=ecf05e47wpg016yzb1mqvzh86isal3wrgq0akivhp23e0lsy&ep=v1_gifs_search&rid=giphy.gif&ct=g');\n    background-size: fill;\n}\n\n.windowCard {\n    height: 86%;\n    width: 25%;\n    min-width: 345px;\n    background-color: rgba(0, 0, 0, 0.5);;\n    border: medium solid white;\n    border-radius: 25px;\n    text-align: center;\n    padding: 1rem;\n}\n\n#settingsOverlay {\n    position: absolute;\n    background: lightgray;\n    z-index: 1;\n    border-color: black;\n    border-style: solid;\n    border-width: 2px;\n    border-radius: 25px;\n    width: 300px;\n    height: 200px;\n    display: none;\n    flex-direction: column;\n    padding: 1% 3% 2%;\n    gap: 2%;\n}\n\n#settingsOverlay p {\n    font-weight: 400;\n    text-decoration: underline;\n    font-size: 2rem;\n    margin-bottom: 3%;\n    padding-top: 7%;\n}\n\n#settingsOverlay div button {\n    margin-top: 10px;\n}\n\n.settingsOverlayRow {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#settingsOverlayCloseButton {\n    position: absolute;\n    border-style: solid;\n    border-color: black;\n    background: rgb(255, 41, 41);\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    top: 3%;\n    right: 92%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.8rem;\n    font-family:sans-serif;\n    color: white;\n}\n\n/* #region Left Card */\n\n#leftCardCondition {\n    margin: auto;\n    height: 100px;\n}\n\n#leftCardContent {\n    margin-top: 1rem;\n    display: flex;\n    margin: 1rem;\n    font-size: 1.2rem;\n    color: white;\n}\n\n#leftCardLabels {\n    text-align: left;\n    width: 50%;\n}\n\n#leftCardLabels li {\n    margin: 10px 0;\n}\n\n#leftCardValues {\n    text-align: right;\n    width: 50%;\n}\n\n#leftCardValues li {\n    margin: 10px 0;\n}\n\n/* #endregion */\n\n\n/* #region Right Card */\n#rightCard {\n    overflow-y: scroll;\n    overflow-x: hidden;\n    color: black;\n}\n\n.hourCard {\n    margin-bottom: 5px;\n    height: 20%;\n    width: 100%;\n    background-color: white;\n    display: grid;\n    border: medium solid black;\n    border-radius: 25px;\n    grid-template-columns: 33% 33% 33%;\n    grid-template-rows: 50% 50%;\n}\n\n.cardCell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* #endregion */\n\n/* #endregion */\n`,""]);const g=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var g=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)t[g].references++,t[g].updater(p);else{var y=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:y,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},60:(e,t,n)=>{e.exports=n.p+"31f0a02d84d42627c894.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),l=n.n(c),s=n(216),d=n.n(s),u=n(589),g=n.n(u),p=n(222),y={};y.styleTagTransform=g(),y.setAttributes=l(),y.insert=i().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=d(),t()(p.Z,y),p.Z&&p.Z.locals&&p.Z.locals;const h={TODAY:Symbol("today"),TOMORROW:Symbol("tomorrow"),FOLLOWING_DAY:Symbol("following_day")},f={LEFT:Symbol("left"),RIGHT:Symbol("right")};((e,t)=>{let n,r="Rogers, AR",o=h.TODAY,a=f.LEFT,i=null,c=!1,l={metric:!1,temp:"F"};const s=()=>({getLocation:()=>r,getSettings:()=>l,getWeatherData:()=>n,getChosenDay:()=>o,getChosenCard:()=>a,updateLocation:async function(e){await m(e),i&&(n=i,console.log("Updated Data:"),console.log(n),r=`${n.location.name}, ${n.location.region}, ${n.location.country}`,d.updateLocation(),p.updateData(),y.updateData(),localStorage.setItem("weatherData",JSON.stringify(n)),localStorage.setItem("location",JSON.stringify(r)))},toggleSettingsOpen:()=>{c||g.populateSettings(),c=!c},updateChosenDay:e=>{o=e,console.log("Updated Settings:"),console.log(o),u.underlineChosenDay(o),p.updateData(),y.updateData(),localStorage.setItem("chosenDay",JSON.stringify(o.description))},updateSettings:e=>{l=e,console.log("Updated Settings:"),console.log(l),localStorage.setItem("settings",JSON.stringify(l))},updateCardDisplay:(e,t)=>{a=e,t?(a==f.LEFT&&(document.querySelector("#rightCard").style.display="none",document.querySelector("#leftCard").style.display="block"),a==f.RIGHT&&(document.querySelector("#leftCard").style.display="none",document.querySelector("#rightCard").style.display="block")):(document.querySelector("#rightCard").style.display="block",document.querySelector("#leftCard").style.display="block")}});!async function(){await async function(){let e=!1,t=["weatherData","location","settings","chosenDay"];if(console.log("Lodaing Data..."),t.forEach((t=>{console.log(JSON.parse(localStorage.getItem(t))),null==JSON.parse(localStorage.getItem(t))&&(e=!0)})),e)return console.log("Error Loading Data..."),!1;switch(n=JSON.parse(localStorage.getItem(t[0])),r=JSON.parse(localStorage.getItem(t[1])),l=JSON.parse(localStorage.getItem(t[2])),JSON.parse(localStorage.getItem(t[3]))){case"tomorrow":o=h.TOMORROW;break;case"following_day":o=h.FOLLOWING_DAY;break;default:o=h.TODAY}return(Math.floor((new Date).getTime()/1e3)-n.current.last_updated_epoch)/3600>1&&(await m(r),n=i,console.log("Updated Data:"),console.log(n)),!0}()||(await m(r),n=i,r=`${n.location.name}, ${n.location.region}, ${n.location.country}`,console.log("Updated Data:"),console.log(n))}();const d=(e=>{const t=()=>{document.querySelector("#headerBarLocation").textContent=e.getLocation()},n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent),r=()=>{document.querySelector("#headerBarTitle").style.display="none",document.querySelector("#headerBar").style.cssText="justify-content: center"};return document.querySelector("#headerBarChangeLocation").addEventListener("click",(()=>{const t=prompt('Enter a Location Formatted: <City>, <State/Country>\nStates may be abbreviated e.g. "St. Louis, MO"');(e=>{const t=/^[A-Za-z\s.]+\,\s*[A-Za-z\s]*$/;return t.test(e)||alert("Input Error - Unexpected Input Values\nPlease enter city, state/country i.e.\nSt. Louis, MO"),t.test(e)})(t)&&e.updateLocation(t)})),document.querySelector("#headerBarSettings").addEventListener("click",(()=>{document.querySelector("#settingsOverlay").style.display="flex",e.toggleSettingsOpen()})),n||addEventListener("resize",(()=>{window.innerWidth<910?r():(document.querySelector("#headerBarTitle").style.display="block",document.querySelector("#headerBar").style.cssText="justify-content: space-between")})),(n||window.innerWidth<910)&&r(),t(),{updateLocation:t}})(s()),u=(e=>{const t=()=>{let t;switch(document.querySelectorAll("#currentDaySelector, #tomorrowSelector, #followingDaySelector").forEach((e=>{e.style.cssText="text-decoration:none;"})),e.getChosenDay()){case h.TOMORROW:t="#tomorrowSelector";break;case h.FOLLOWING_DAY:t="#followingDaySelector";break;default:t="#currentDaySelector"}document.querySelector(t).style.cssText="text-decoration:underline;"};return document.querySelectorAll("#currentDaySelector, #tomorrowSelector, #followingDaySelector").forEach((t=>{t.addEventListener("click",(()=>{let n;switch(t.id){case"tomorrowSelector":n=h.TOMORROW;break;case"followingDaySelector":n=h.FOLLOWING_DAY;break;default:n=h.TODAY}e.updateChosenDay(n)}))})),(()=>{const e=document.querySelector("#followingDaySelector"),t=new Date((new Date).getTime()+1728e5).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit"});e.textContent=t})(),t(),{underlineChosenDay:t}})(s()),g=((e=>{const t=()=>{let t;document.querySelectorAll("#leftCardSelector, #rightCardSelector").forEach((e=>{e.style.cssText="text-decoration:none;"})),t=e.getChosenCard()===f.RIGHT?"#rightCardSelector":"#leftCardSelector",document.querySelector(t).style.cssText="text-decoration:underline;"},n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent),r=()=>{document.querySelector("#cardSelectBar").style.display="flex"};n||addEventListener("resize",(()=>{window.innerWidth<840?(r(),e.updateCardDisplay(e.getChosenCard(),!0)):(document.querySelector("#cardSelectBar").style.display="none",e.updateCardDisplay(e.getChosenCard(),!1))})),document.querySelectorAll("#leftCardSelector, #rightCardSelector").forEach((n=>{n.addEventListener("click",(()=>{let r;r="rightCardSelector"===n.id?f.RIGHT:f.LEFT,e.updateCardDisplay(r,!0),t()}))})),t(),(n||window.innerWidth<840)&&(r(),e.updateCardDisplay(e.getChosenCard(),!0))})(s()),(e=>(document.querySelector("#settingsOverlayCloseButton").addEventListener("click",(()=>{const t={metric:document.querySelector("#metricToggle").checked,temp:"fahrenheit"==document.querySelector("#tempUnits").value?"F":"C"};e.updateSettings(t),document.querySelector("#settingsOverlay").style.display="none",e.toggleSettingsOpen()})),{populateSettings:()=>{const t=e.getSettings();document.querySelector("#metricToggle").checked=t.metric,"C"!==t.temp?document.querySelector("#tempUnits").value="fahrenheit":document.querySelector("#tempUnits").value="celsius"}}))(s())),p=(e=>{const t=()=>{let t=e.getWeatherData();switch(e.getChosenDay()){case h.TOMORROW:t=t.forecast.forecastday[1];break;case h.FOLLOWING_DAY:t=t.forecast.forecastday[2];break;default:t=t.forecast.forecastday[0]}document.querySelector("#leftCardCondition").src=t.day.condition.icon,document.querySelector("#conditionVal").textContent=t.day.condition.text};return t(),{updateData:t}})(s()),y=(e=>{const t=()=>{let t=e.getWeatherData();switch(e.getChosenDay()){case h.TOMORROW:t=t.forecast.forecastday[1];break;case h.FOLLOWING_DAY:t=t.forecast.forecastday[2];break;default:t=t.forecast.forecastday[0]}n(),r();for(let e=0;e<24;e++)document.querySelector(`[data-hour="${e}"]`).querySelector(".temp").innerHTML=t.hour[e].temp_f+"&degF"},n=()=>{if(document.querySelectorAll(".hourCard").forEach((e=>{e.style.cssText="background: white"})),e.getChosenDay()==h.TODAY)for(let e=0;e<24;e++){const t=document.querySelector(`[data-hour="${e}"]`);e<(new Date).getHours()&&(t.style.cssText="background: grey")}},r=()=>{if(e.getChosenDay()==h.TODAY){const e=document.querySelector("#rightCard");e.scrollTo(0,Math.min(110*(new Date).getHours(),e.scrollHeight))}};return(()=>{const e=document.querySelector(".hourCard");for(let t=1;t<24;t++){const n=e.cloneNode(!0);n.dataset.hour=t;let r=t>12?t-12:t,o=t>12?"PM":"AM";n.querySelector(".hour").textContent=`${r}:00 ${o}`,document.querySelector("#rightCard").appendChild(n)}})(),n(),r(),t(),{updateData:t}})(s());async function m(e){const t=`http://api.weatherapi.com/v1/forecast.json?key=81118de3a27c4287bd233838231611&q=${e}&days=3&aqi=no&alerts=no`;i=await fetch(t,{mode:"cors"}),i=await i.json(),i.error&&(i=null)}})()})()})();