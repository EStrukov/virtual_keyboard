(()=>{"use strict";var e={373:(e,t,a)=>{a.r(t)}},t={};function a(r){var c=t[r];if(void 0!==c)return c.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{a(373);const e=["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Del","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","↑","Shift","Ctrl","Win","Alt"," ","Alt","Ctrl","←","↓","→"],t=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"];document.body.innerHTML='<textarea class="inputina"></textarea><div class="wrapper"></div>';let r=document.querySelector(".wrapper");function c(e){if(e.focus(),e.selectionStart)return e.selectionStart;if(document.selection){var t=document.selection.createRange(),a=t.duplicate();return t.collapse(!0),a.moveToElementText(e),a.setEndPoint("EndToEnd",t),a.text.length}return 0}!function(){let a="",c=document.createElement("div");c.className="keystring";for(let r=0;r<e.length;r++)a+='<div class="key" data-key="'+t[r]+'">'+e[r]+"</div>";c.innerHTML=a,r.append(c),a=""}();let i=document.querySelector('.key[data-key="CapsLock"]'),o=document.createElement("input");o.setAttribute("type","checkbox"),i.append(o);let l=document.querySelector("textarea"),d=document.querySelectorAll(".key");function s(e,t,a){if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,a);else if(e.createTextRange){var r=e.createTextRange();r.collapse(!0),r.moveEnd("character",a),r.moveStart("character",t),r.select()}}document.querySelector('.key[data-key="Space"]').style.width="300px",document.querySelector('.key[data-key="Enter"]').style.width="100px",document.querySelector('.key[data-key="CapsLock"]').style.width="100px",document.querySelector('.key[data-key="Backspace"]').style.width="115px",document.querySelector('.key[data-key="ShiftLeft"]').style.width="115px",document.querySelector('.key[data-key="ShiftRight"]').style.width="60px",document.querySelector('.key[data-key="ControlLeft"]').style.width="60px",document.querySelector('.key[data-key="ControlRight"]').style.width="60px",document.querySelector('.key[data-key="AltLeft"]').style.width="60px",document.querySelector('.key[data-key="AltRight"]').style.width="60px",document.addEventListener("keydown",(e=>{d.forEach((t=>{e.code===t.dataset.key&&t.classList.add("active")}))})),document.addEventListener("keyup",(e=>{d.forEach((t=>{e.code===t.dataset.key&&t.classList.remove("active")}))})),d.forEach((e=>{e.addEventListener("mousedown",(t=>{l.focus(),t.preventDefault(),e.classList.add("active");let a=c(l);if("CapsLock"!=t.target.dataset.key&&"ControlLeft"!=t.target.dataset.key&&"ControlRight"!=t.target.dataset.key&&"AltLeft"!=t.target.dataset.key&&"AltRight"!=t.target.dataset.key&&"Enter"!=t.target.dataset.key&&"Backspace"!=t.target.dataset.key&&"Delete"!=t.target.dataset.key&&"ShiftRight"!=t.target.dataset.key&&"ShiftLeft"!=t.target.dataset.key&&"Tab"!=t.target.dataset.key&&"MetaLeft"!=t.target.dataset.key&&"ArrowLeft"!=t.target.dataset.key&&"ArrowRight"!=t.target.dataset.key&&"ArrowUp"!=t.target.dataset.key&&"ArrowDown"!=t.target.dataset.key)if(0==o.checked){let e=l.value.split("");e.splice(a,0,t.target.innerHTML),l.value=e.join(""),s(l,a+1,a+1)}else{let e=l.value.split("");e.splice(a,0,t.target.innerHTML.toUpperCase()),l.value=e.join(""),s(l,a+1,a+1)}else if("Backspace"===t.target.dataset.key){a=c(l);let e=l.value.split("");e.splice(a-1,1),l.value=e.join(""),s(l,a-1,a-1)}else if("Delete"===t.target.dataset.key){let e=l.value.split("");e.splice(a,1),l.value=e.join(""),s(l,a,a)}else if("Tab"===t.target.dataset.key){let e=l.value.split("");e.splice(a,0,"    "),l.value=e.join(""),s(l,a+4,a+4)}else"ArrowLeft"===t.target.dataset.key?s(l,a-1,a-1):"ArrowRight"===t.target.dataset.key?s(l,a+1,a+1):"ArrowUp"===t.target.dataset.key?s(l,a-92,a-92):"ArrowDown"===t.target.dataset.key&&s(l,a+92,a+92)}))})),d.forEach((e=>{l.focus(),e.addEventListener("mouseup",(t=>{t.preventDefault(),e.classList.remove("active")}))})),i.addEventListener("click",(()=>{!0!==o.checked?o.checked=!0:o.checked=!1})),document.addEventListener("keydown",(e=>{l.focus();let t=c(l);if("CapsLock"==e.key&&(!0!==o.checked?o.checked=!0:o.checked=!1),"Tab"==e.key){e.preventDefault();let a=l.value.split("");a.splice(t,0,"    "),l.value=a.join(""),s(l,t+4,t+4)}"MetaLeft"==e.key&&e.preventDefault(),"ShiftLeft"!=e.key&&"ShiftRight"!=e.key||(!0!==o.checked?o.checked=!0:o.checked=!1)})),document.addEventListener("keydown",(e=>{"ShiftLeft"!=e.key&&"ShiftRight"!=e.key||(!0!==o.checked?o.checked=!0:o.checked=!1)}))})()})();