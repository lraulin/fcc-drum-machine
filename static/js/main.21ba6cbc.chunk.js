(this["webpackJsonpfcc-drum-machine"]=this["webpackJsonpfcc-drum-machine"]||[]).push([[0],[,,,,function(e,r,t){e.exports=t(11)},,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),c=t(2),o=t.n(c),i=(t(9),t(3)),s=(t(10),Object(a.forwardRef)((function(e,r){var t=e.id,a=e.keyTrigger,c=e.url,o=e.setLastPressed;return n.a.createElement("div",null,n.a.createElement("button",{className:"drum-pad",id:t,onClick:function(){r.current.play(),o(t)}},a,n.a.createElement("audio",{className:"clip",id:a,src:c,ref:r})))}))),d=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],m=function(){var e=Object(a.useState)(""),r=Object(i.a)(e,2),t=r[0],c=r[1],o=Object(a.useRef)(),m=d.reduce((function(e,r){return e[r.keyTrigger]=Object(a.createRef)(),e}),{});return Object(a.useEffect)((function(){var e=function(e){var r=e.key.toUpperCase(),t=m[r];t&&t.current&&!t.current.contains(e.target)&&(t.current.play(),c(d.filter((function(e){return e.keyTrigger===r}))[0].id))};document.addEventListener("keydown",e);return function(){document.removeEventListener("keydown",e)}}),[m,c]),n.a.createElement("div",{id:"drum-machine",ref:o,tabIndex:"0"},d.map((function(e){return n.a.createElement(s,{id:e.id,keyTrigger:e.keyTrigger,url:e.url,key:e.id,setLastPressed:c,ref:m[e.keyTrigger]})})),n.a.createElement("div",{id:"display"},t))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.21ba6cbc.chunk.js.map