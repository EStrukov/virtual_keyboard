import './style.scss';

const keyboardString1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't',
  'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];

const keyboardStringCode1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0',
  'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft',
  'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon',
  'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

document.body.innerHTML = '<textarea class="inputina"></textarea><div class="wrapper"></div>';
let wrapper = document.querySelector('.wrapper');

// function createUpperKeyboard() {
//   let numString = '';
//   let div1 = document.createElement('div');
//   div1.className = 'keystring';
//   for (let i = 0; i < keyboardString1.length; i++) {
//     numString += '<div class="key" data-key="' + keyboardStringCode1[i] + '">' + keyboardString1[i].toUpperCase() + '</div>';
//   }
//   div1.innerHTML = numString;
//   wrapper.append(div1);
//   numString = '';
// }


function createKeyboard() {
  let numString = '';
  let div1 = document.createElement('div');
  div1.className = 'keystring';
  for (let i = 0; i < keyboardString1.length; i++) {
    numString += '<div class="key" data-key="' + keyboardStringCode1[i] + '">' + keyboardString1[i] + '</div>';
  }
  div1.innerHTML = numString;
  wrapper.append(div1);
  numString = '';

}
createKeyboard();

let text = document.querySelector('textarea');
let keys = document.querySelectorAll('.key');
function sizeBtn() {
  document.querySelector('.key[data-key="Space"]').style.width = 300 + 'px';
  document.querySelector('.key[data-key="Enter"]').style.width = 100 + 'px';
  document.querySelector('.key[data-key="CapsLock"]').style.width = 100 + 'px';
  document.querySelector('.key[data-key="Backspace"]').style.width = 115 + 'px';
  document.querySelector('.key[data-key="ShiftLeft"]').style.width = 115 + 'px';
  document.querySelector('.key[data-key="ShiftRight"]').style.width = 60 + 'px';
  document.querySelector('.key[data-key="ControlLeft"]').style.width = 60 + 'px';
  document.querySelector('.key[data-key="ControlRight"]').style.width = 60 + 'px';
  document.querySelector('.key[data-key="AltLeft"]').style.width = 60 + 'px';
  document.querySelector('.key[data-key="AltRight"]').style.width = 60 + 'px';
}
sizeBtn();

// function upperOrlower() {
//   if (event.shiftKey === true) {
//     wrapper.innerHTML = '';
//     createUpperKeyboard();
//     sizeBtn();
//   } else {
//     wrapper.innerHTML = '';
//     createKeyboard();
//     sizeBtn();
// }
// }


document.addEventListener('keydown', (event) => {  
  keys.forEach(e => {
    if (event.code === e.dataset.key) {
      e.classList.add('active');
    } 
  });
});

document.addEventListener('keyup', (event) => {
  keys.forEach(e => {
    if (event.code === e.dataset.key) {
      e.classList.remove('active');
    } 
  });
});

keys.forEach(e => {
  e.addEventListener('mousedown', (event) => {
    text.focus();
    event.preventDefault();
    e.classList.add('active');
    console.log(event);
    text.value = text.value + event.target.innerHTML;
  });
});

keys.forEach(e => {
  text.focus();
  e.addEventListener('mouseup', (event) => {
    event.preventDefault();
    console.log(e);
    e.classList.remove('active');
  });
});

