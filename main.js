(()=>{"use strict";var e={222:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),d=new URL(n(60),n.b),l=i()(o()),u=s()(d);l.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    min-width: 565px;\n}\n\nul {\n    list-style-type: none;\n}\n\n#headerBarChangeLocation:hover, #headerBarSettings:hover, .navBarButton:hover,\n#settingsOverlayCloseButton:hover {\n    cursor: pointer;\n}\n\n@font-face {\n    font-family: 'TitleFont';\n    src: url(${u}) format('truetype');\n    font-style: normal;\n}\n\n/* #region Header Bar */\n#headerBar, #headerBarFarRightSide {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: rgb(121, 198, 231);\n    height: 10%;\n}\n\n#headerBar {\n    padding-left: 2rem;\n}\n\n#headerBarTitle {\n    font-family: 'TitleFont';\n    font-size: 3rem;\n    min-width: 370px;\n}\n\n#headerBarFarRightSide {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    padding-right: 2rem;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n#headerBarCenter {\n    display: flex;\n    align-items: center;\n    height: 100%;\n}\n\n#headerBarChangeLocation {\n    height: 70%;\n}\n\n#headerBarSettings {\n    padding-left: 50px;\n    height: 70%;\n}\n/* #endregion */\n\n/* #region Nav Bar */\n#navBar {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgb(216, 231, 121);\n    height: 5%;\n    gap: 2rem;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n/* #endregion */\n\n/* #region Card Select Bar */\n#cardSelectBar {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background: rgb(121, 231, 138);\n    height: 5%;\n    gap: 2rem;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n/* #endregion */\n\n/* #region Main Window */\n#contentWindow {\n    display: flex;\n    height: 85%;\n    justify-content: center;\n    align-items: center;\n    gap: 1.6rem;\n    background-image: url('https://media0.giphy.com/media/uqpK3SuxEY4W9YQvdg/giphy.gif?cid=ecf05e47wpg016yzb1mqvzh86isal3wrgq0akivhp23e0lsy&ep=v1_gifs_search&rid=giphy.gif&ct=g');\n    background-size: 300px;\n}\n\n.windowCard {\n    height: 86%;\n    width: 25%;\n    min-width: 345px;\n    background-color: rgba(0, 0, 0, 0.5);;\n    border: medium solid transparent;\n    border-radius: 25px;\n    text-align: center;\n    padding: 1rem;\n}\n\n#settingsOverlay {\n    position: absolute;\n    background: lightgray;\n    z-index: 1;\n    border-color: black;\n    border-style: solid;\n    border-width: 2px;\n    border-radius: 25px;\n    width: 300px;\n    height: 200px;\n    display: none;\n    flex-direction: column;\n    padding: 1% 3% 2%;\n    gap: 2%;\n}\n\n#settingsOverlay p {\n    font-weight: 400;\n    text-decoration: underline;\n    font-size: 2rem;\n    margin-bottom: 3%;\n    padding-top: 7%;\n}\n\n#settingsOverlay div button {\n    margin-top: 10px;\n}\n\n.settingsOverlayRow {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#settingsOverlayCloseButton {\n    position: absolute;\n    border-style: solid;\n    border-color: black;\n    background: rgb(255, 41, 41);\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    top: 3%;\n    right: 92%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.8rem;\n    font-family:sans-serif;\n    color: white;\n}\n\n/* #region Left Card */\n\n#leftCardCondition {\n    margin: auto;\n    height: 100px;\n}\n\n#leftCardContent {\n    margin-top: 1rem;\n    display: flex;\n    margin: 1rem;\n    font-size: 1.2rem;\n    color: white;\n}\n\n#leftCardLabels {\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: left;\n    width: 47%;\n}\n\n#leftCardLabels li {\n    margin: 10px 0;\n}\n\n#leftCardValues {\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: right;\n    width: 53%;\n}\n\n#leftCardValues li {\n    margin: 10px 0;\n}\n\n/* #endregion */\n\n\n/* #region Right Card */\n#rightCard {\n    overflow-y: scroll;\n    overflow-x: hidden;\n    color: black;\n    font-size: 1.2rem;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.hourCard {\n    margin-bottom: 5px;\n    height: 20%;\n    width: 100%;\n    background-color: teal;\n    display: grid;\n    border: medium solid black;\n    border-radius: 25px;\n    grid-template-columns: 33% 33% 33%;\n    grid-template-rows: 50% 50%;\n}\n\n.cardCell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.windArrow {\n    height: 70%;\n}\n\n.windLabel {\n    font-weight: bolder;\n}\n\n/* #endregion */\n\n/* #endregion */\n`,""]);const g=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var g=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==g)t[g].references++,t[g].updater(p);else{var y=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:y,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},60:(e,t,n)=>{e.exports=n.p+"31f0a02d84d42627c894.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),g=n.n(u),p=n(222),y={};y.styleTagTransform=g(),y.setAttributes=s(),y.insert=i().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),t()(p.Z,y),p.Z&&p.Z.locals&&p.Z.locals;const h=n.p+"91e52600074549bc0e5c.png",m=n.p+"e157fda8a0a121079316.png",f=n.p+"4cc4a5104d3f494d8df2.png",S={TODAY:Symbol("today"),TOMORROW:Symbol("tomorrow"),FOLLOWING_DAY:Symbol("following_day")},v={LEFT:Symbol("left"),RIGHT:Symbol("right")};((e,t)=>{let n,r="Rogers, AR",o=S.TODAY,a=v.LEFT,i=null,c=!1,s={metric:!1,temp:"F"};const d=()=>({getLocation:()=>r,getSettings:()=>s,getWeatherData:()=>n,getChosenDay:()=>o,getChosenCard:()=>a,updateLocation:async function(e){await w(e),i&&(n=i,i=null,console.log("Updated Data:"),console.log(n),r=`${n.location.name}, ${n.location.region}, ${n.location.country}`,b.changeBackground(),l.updateLocation(),p.updateData(),y.updateData(),localStorage.setItem("weatherData",JSON.stringify(n)),localStorage.setItem("location",JSON.stringify(r)))},toggleSettingsOpen:()=>{c||g.populateSettings(),c=!c},updateChosenDay:e=>{o=e,console.log("Updated Settings:"),console.log(o),u.underlineChosenDay(o),b.changeBackground(),p.updateData(),y.updateData(),localStorage.setItem("chosenDay",JSON.stringify(o.description))},updateSettings:e=>{s=e,console.log("Updated Settings:"),console.log(s),p.updateData(),y.updateData(),localStorage.setItem("settings",JSON.stringify(s))},updateCardDisplay:(e,t)=>{a=e,t?(a==v.LEFT&&(document.querySelector("#rightCard").style.display="none",document.querySelector("#leftCard").style.display="block"),a==v.RIGHT&&(document.querySelector("#leftCard").style.display="none",document.querySelector("#rightCard").style.display="block")):(document.querySelector("#rightCard").style.display="block",document.querySelector("#leftCard").style.display="block")}});!async function(){document.querySelector("#headerBarSettings").src=m,document.querySelector("#headerBarChangeLocation").src=f,await async function(){let e=!1,t=["weatherData","location","settings","chosenDay"];if(console.log("Lodaing Data..."),t.forEach((t=>{console.log(JSON.parse(localStorage.getItem(t))),null==JSON.parse(localStorage.getItem(t))&&(e=!0)})),e)return console.log("Error Loading Data..."),!1;switch(n=JSON.parse(localStorage.getItem(t[0])),r=JSON.parse(localStorage.getItem(t[1])),s=JSON.parse(localStorage.getItem(t[2])),JSON.parse(localStorage.getItem(t[3]))){case"tomorrow":o=S.TOMORROW;break;case"following_day":o=S.FOLLOWING_DAY;break;default:o=S.TODAY}return(Math.floor((new Date).getTime()/1e3)-n.current.last_updated_epoch)/3600>1&&(await w(r),n=i,console.log("Updated Data:"),console.log(n)),!0}()||(await w(r),n=i,r=`${n.location.name}, ${n.location.region}, ${n.location.country}`,console.log("Updated Data:"),console.log(n))}();const l=(e=>{const t=()=>{document.querySelector("#headerBarLocation").textContent=e.getLocation()},n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent),r=()=>{document.querySelector("#headerBarTitle").style.display="none",document.querySelector("#headerBar").style.cssText="justify-content: center"};return document.querySelector("#headerBarChangeLocation").addEventListener("click",(()=>{const t=prompt('Enter a Location Formatted: <City>, <State/Country>\nStates may be abbreviated e.g. "St. Louis, MO"');(e=>{const t=/^[A-Za-z\s.]+\,\s*[A-Za-z\s]*$/;return t.test(e)||alert("Input Error - Unexpected Input Values\nPlease enter city, state/country i.e.\nSt. Louis, MO"),t.test(e)})(t)&&e.updateLocation(t)})),document.querySelector("#headerBarSettings").addEventListener("click",(()=>{document.querySelector("#settingsOverlay").style.display="flex",e.toggleSettingsOpen()})),n||addEventListener("resize",(()=>{window.innerWidth<910?r():(document.querySelector("#headerBarTitle").style.display="block",document.querySelector("#headerBar").style.cssText="justify-content: space-between")})),(n||window.innerWidth<910)&&r(),t(),{updateLocation:t}})(d()),u=(e=>{const t=()=>{let t;switch(document.querySelectorAll("#currentDaySelector, #tomorrowSelector, #followingDaySelector").forEach((e=>{e.style.cssText="text-decoration:none;"})),e.getChosenDay()){case S.TOMORROW:t="#tomorrowSelector";break;case S.FOLLOWING_DAY:t="#followingDaySelector";break;default:t="#currentDaySelector"}document.querySelector(t).style.cssText="text-decoration:underline;"};return document.querySelectorAll("#currentDaySelector, #tomorrowSelector, #followingDaySelector").forEach((t=>{t.addEventListener("click",(()=>{let n;switch(t.id){case"tomorrowSelector":n=S.TOMORROW;break;case"followingDaySelector":n=S.FOLLOWING_DAY;break;default:n=S.TODAY}e.updateChosenDay(n)}))})),(()=>{const e=document.querySelector("#followingDaySelector"),t=new Date((new Date).getTime()+1728e5).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit"});e.textContent=t})(),t(),{underlineChosenDay:t}})(d()),g=((e=>{const t=()=>{let t;document.querySelectorAll("#leftCardSelector, #rightCardSelector").forEach((e=>{e.style.cssText="text-decoration:none;"})),t=e.getChosenCard()===v.RIGHT?"#rightCardSelector":"#leftCardSelector",document.querySelector(t).style.cssText="text-decoration:underline;"},n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent),r=()=>{document.querySelector("#cardSelectBar").style.display="flex"};n||addEventListener("resize",(()=>{window.innerWidth<840?(r(),e.updateCardDisplay(e.getChosenCard(),!0)):(document.querySelector("#cardSelectBar").style.display="none",e.updateCardDisplay(e.getChosenCard(),!1))})),document.querySelectorAll("#leftCardSelector, #rightCardSelector").forEach((n=>{n.addEventListener("click",(()=>{let r;r="rightCardSelector"===n.id?v.RIGHT:v.LEFT,e.updateCardDisplay(r,!0),t()}))})),t(),(n||window.innerWidth<840)&&(r(),e.updateCardDisplay(e.getChosenCard(),!0))})(d()),(e=>(document.querySelector("#settingsOverlayCloseButton").addEventListener("click",(()=>{const t={metric:document.querySelector("#metricToggle").checked,temp:"fahrenheit"==document.querySelector("#tempUnits").value?"F":"C"};e.updateSettings(t),document.querySelector("#settingsOverlay").style.display="none",e.toggleSettingsOpen()})),{populateSettings:()=>{const t=e.getSettings();document.querySelector("#metricToggle").checked=t.metric,"C"!==t.temp?document.querySelector("#tempUnits").value="fahrenheit":document.querySelector("#tempUnits").value="celsius"}}))(d())),p=(e=>{const t=()=>{let t=e.getWeatherData(),n=null;switch(e.getChosenDay()){case S.TOMORROW:n=t.forecast.forecastday[1];break;case S.FOLLOWING_DAY:n=t.forecast.forecastday[2];break;default:n=t.forecast.forecastday[0]}document.querySelector("#leftCardCondition").src=e.getChosenDay()==S.TODAY?t.current.condition.icon:n.day.condition.icon,document.querySelector("#conditionVal").textContent=e.getChosenDay()==S.TODAY?t.current.condition.text:n.day.condition.text,document.querySelector("#tempVal").textContent=("F"==e.getSettings().temp?n.day.avgtemp_f:n.day.avgtemp_c)+"°"+e.getSettings().temp,document.querySelector("#tempHiVal").textContent=("F"==e.getSettings().temp?n.day.maxtemp_f:n.day.maxtemp_c)+"°"+e.getSettings().temp,document.querySelector("#tempLoVal").textContent=("F"==e.getSettings().temp?n.day.mintemp_f:n.day.mintemp_c)+"°"+e.getSettings().temp,document.querySelector("#windVal").textContent=e.getSettings().metric?n.day.maxwind_kph+" kph":n.day.maxwind_mph+" mph",document.querySelector("#humVal").textContent=n.day.avghumidity,document.querySelector("#visVal").textContent=e.getSettings().metric?n.day.avgvis_km+" km":n.day.avgvis_miles+" miles",document.querySelector("#rainVal").textContent=n.day.daily_chance_of_rain,document.querySelector("#snowVal").textContent=n.day.daily_chance_of_snow,document.querySelector("#sunriseVal").textContent=n.astro.sunrise,document.querySelector("#sunsetVal").textContent=n.astro.sunset};return t(),{updateData:t}})(d()),y=(e=>{const t=()=>{let t=e.getWeatherData(),o=null;switch(e.getChosenDay()){case S.TOMORROW:o=t.forecast.forecastday[1];break;case S.FOLLOWING_DAY:o=t.forecast.forecastday[2];break;default:o=t.forecast.forecastday[0]}n(),r();for(let t=0;t<24;t++){const n=document.querySelector(`[data-hour="${t}"]`);n.querySelector(".temp").textContent=("F"==e.getSettings().temp?o.hour[t].temp_f:o.hour[t].temp_c)+"°"+e.getSettings().temp,n.querySelector(".condition").src=o.hour[t].condition.icon,n.querySelector(".windVal").textContent=e.getSettings().metric?o.hour[t].wind_kph+" kph":o.hour[t].wind_mph+" mph",n.querySelector(".windArrow").src=h,n.querySelector(".windArrow").style.cssText=`transform: rotate(${o.hour[t].wind_degree-90}deg);`}},n=()=>{if(document.querySelectorAll(".hourCard").forEach((e=>{e.style.cssText="background: rgb(121, 198, 231);"})),e.getChosenDay()==S.TODAY)for(let e=0;e<24;e++){const t=document.querySelector(`[data-hour="${e}"]`);e<(new Date).getHours()&&(t.style.cssText="background: grey")}},r=()=>{if(e.getChosenDay()==S.TODAY){const e=document.querySelector("#rightCard");e.scrollTo(0,Math.min(110*(new Date).getHours(),e.scrollHeight))}};return(()=>{const e=document.querySelector(".hourCard");for(let t=1;t<24;t++){const n=e.cloneNode(!0);n.dataset.hour=t;let r=t>12?t-12:t,o=t>12?"PM":"AM";n.querySelector(".hour").textContent=`${r}:00 ${o}`,document.querySelector("#rightCard").appendChild(n)}})(),n(),r(),t(),{updateData:t}})(d()),b=(e=>{const t=()=>{let t=e.getWeatherData(),d=null;switch(e.getChosenDay()){case S.TOMORROW:d=t.forecast.forecastday[1];break;case S.FOLLOWING_DAY:d=t.forecast.forecastday[2];break;default:d=t.forecast.forecastday[0]}let l=n.DEFAULT;r.includes(d.day.condition.code)&&(l=n.SUN,t.current.is_day||e.getChosenDay()!=S.TODAY||(l=n.MOON)),o.includes(d.day.condition.code)&&(l=n.PCLOUD,t.current.is_day||e.getChosenDay()!=S.TODAY||(l=n.MOON)),a.includes(d.day.condition.code)&&(l=n.CLOUD,t.current.is_day||e.getChosenDay()!=S.TODAY||(l=n.MOON)),i.includes(d.day.condition.code)&&(l=n.SNOW),c.includes(d.day.condition.code)&&(l=n.RAIN),s.includes(d.day.condition.code)&&(l=n.STORM),document.querySelector("#contentWindow").style.cssText=`background-image: url(${l});`},n={SUN:"https://media0.giphy.com/media/uqpK3SuxEY4W9YQvdg/giphy.gif?cid=ecf05e47wpg016yzb1mqvzh86isal3wrgq0akivhp23e0lsy&ep=v1_gifs_search&rid=giphy.gif&ct=g",CLOUD:"https://media2.giphy.com/media/mNG0rIdAYvLog0Wr8H/giphy.gif?cid=ecf05e47tprle5bfqpy23qkhznsqldxjj6ax18idct2bbw7h&ep=v1_gifs_search&rid=giphy.gif&ct=g",RAIN:"https://media1.giphy.com/media/ZE6hLh4YmbZvfIx4Qu/giphy.gif?cid=ecf05e4729acah0v48hmorrdsumez4gkzopcp4in1aydvx3p&ep=v1_gifs_search&rid=giphy.gif&ct=g",STORM:"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenRkdnIxdzBjZTBtbHBjZW5zMms5bDk2dHIycHJ2d25tamsxanQwaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RNveokQhEObpqyvYb5/giphy.gif",SNOW:"https://media0.giphy.com/media/12wteMTXxjLaVO/giphy.gif?cid=ecf05e477cez6fvymyp0m8s2ctk96cpyz2ngjoi17lynlkdb&ep=v1_gifs_search&rid=giphy.gif&ct=g",PCLOUD:"https://media4.giphy.com/media/jeagzAR8ZVawgisnzH/giphy.gif?cid=ecf05e47wngvndf3pl31rco76snd9a4u0waecokh11iboiq1&ep=v1_gifs_search&rid=giphy.gif&ct=g",MOON:"https://media1.giphy.com/media/QgIreLD4taka4/giphy.gif?cid=ecf05e470ed0jvxvvh537purlb6glebs2xn7rbbk9eog0maw&ep=v1_gifs_search&rid=giphy.gif&ct=g",DEFAULT:"https://media3.giphy.com/media/zwoRf2Ww6LPk4tCL9m/giphy.gif?cid=ecf05e47mr3qhpom1y63p0djdgpb34w086b9s5v87fgb9353&ep=v1_gifs_search&rid=giphy.gif&ct=g"},r=[1e3],o=[1003],a=[1006,1009,1030,1063,1066,1069,1072,1087,1135,1147],i=[1114,1117,1204,1207,1210,1213,1216,1219,1222,1225,1237,1249,1252,1255,1258,1261,1264],c=[1150,1153,1168,1171,1180,1183,1186,1192,1195,1198,1201,1240,1243,1246],s=[1273,1276,1279,1282];return t(),{changeBackground:t}})(d());async function w(e){const t=`https://api.weatherapi.com/v1/forecast.json?key=81118de3a27c4287bd233838231611&q=${e}&days=3&aqi=no&alerts=no`;i=await fetch(t,{mode:"cors"}),i=await i.json(),i.error&&(i=null)}setInterval((async function(){await w(r),i&&(n=i,i=null)}),54e3)})()})()})();