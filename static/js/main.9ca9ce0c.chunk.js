(this["webpackJsonpfcc-drum-machine"]=this["webpackJsonpfcc-drum-machine"]||[]).push([[0],[,,,,function(e,r,t){e.exports=t(11)},,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),c=t(2),o=t.n(c),i=(t(9),t(3)),d=(t(10),Object(n.forwardRef)((function(e,r){var t=e.id,n=e.keyTrigger,c=e.url,o=e.setLastPressed;return a.a.createElement("div",null,a.a.createElement("button",{className:"drum-pad",id:t,onClick:function(){r.current.currentTime=0,r.current.play(),o(t)}},n,a.a.createElement("audio",{className:"clip",id:n,src:c,ref:r})))}))),m=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],s=function(){var e=Object(n.useState)(""),r=Object(i.a)(e,2),t=r[0],c=r[1],o=Object(n.useRef)(),s=m.reduce((function(e,r){return e[r.keyTrigger]=Object(n.createRef)(),e}),{});return Object(n.useEffect)((function(){var e=function e(r){var t=String.fromCharCode(r.keyCode),n=s[t];n&&n.current&&!n.current.contains(r.target)&&(document.removeEventListener("keydown",e),n.current.currentTime=0,n.current.play(),c(m.filter((function(e){return e.keyTrigger===t}))[0].id))};document.addEventListener("keydown",e),document.addEventListener("keyup",(function(){document.addEventListener("keydown",e)}));return function(){document.removeEventListener("keydown",e)}}),[s,c]),a.a.createElement("div",{id:"drum-machine",ref:o,tabIndex:"0"},m.map((function(e){return a.a.createElement(d,{id:e.id,keyTrigger:e.keyTrigger,url:e.url,key:e.id,setLastPressed:c,ref:s[e.keyTrigger]})})),a.a.createElement("div",{id:"display"},t))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.9ca9ce0c.chunk.js.map