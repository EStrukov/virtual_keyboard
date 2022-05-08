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

function getCaretPos(obj) {
  obj.focus();
  if (obj.selectionStart) return obj.selectionStart;
  else if (document.selection) {
    var sel = document.selection.createRange();
    var clone = sel.duplicate();
    sel.collapse(true);
    clone.moveToElementText(obj);
    clone.setEndPoint('EndToEnd', sel);
    return clone.text.length;
  }
  return 0;
}

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

let capsLock = document.querySelector('.key[data-key="CapsLock"]');
let checkBox = document.createElement('input');
checkBox.setAttribute('type', 'checkbox');
capsLock.append(checkBox);
let text = document.querySelector('textarea');
let keys = document.querySelectorAll('.key');


function setSelectionRange(input, selectionStart, selectionEnd) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  } else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selectionEnd);
    range.moveStart('character', selectionStart);
    range.select();
  }
}

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

    if (event.target.dataset.key != 'CapsLock' && event.target.dataset.key != 'ControlLeft' && event.target.dataset.key != 'ControlRight' && event.target.dataset.key != 'AltLeft' &&
      event.target.dataset.key != 'AltRight' && event.target.dataset.key != 'Enter' && event.target.dataset.key != 'Backspace' && event.target.dataset.key != 'Delete' &&
      event.target.dataset.key != 'ShiftRight' && event.target.dataset.key != 'ShiftLeft' && event.target.dataset.key != 'Tab' && event.target.dataset.key != 'MetaLeft') {
      if (checkBox.checked == false) {
        text.value = text.value + event.target.innerHTML;
      } else {
        text.value = text.value + event.target.innerHTML.toUpperCase();
      }
    } else if (event.target.dataset.key === 'Backspace') {
      let back = getCaretPos(text);
      let tmp = text.value.split('');
      tmp.splice(back - 1, 1);
      text.value = tmp.join('');
      setSelectionRange(text, back, back);
    } else if (event.target.dataset.key === 'Delete') {
      let back = getCaretPos(text);
      let tmp = text.value.split('');
      tmp.splice(back, 1);
      text.value = tmp.join('');
      setSelectionRange(text, back, back);
    } else if (event.target.dataset.key === 'Tab') {
      text.value = text.value + '    ';
    }
  });
});

keys.forEach(e => {
  text.focus();
  e.addEventListener('mouseup', (event) => {
    event.preventDefault();
    e.classList.remove('active');
  });
});

capsLock.addEventListener('click', () => {
  if (checkBox.checked !== true) {
    checkBox.checked = true;
  } else {
    checkBox.checked = false;
  }
});

document.addEventListener('keydown', (event) => {
  text.focus();
  if (event.key == 'CapsLock') {
    if (checkBox.checked !== true) {
      checkBox.checked = true;
    } else {
      checkBox.checked = false;
    }
  }
  if (event.key == 'Tab') {
    event.preventDefault();
    text.value = text.value + '    ';
  }
  if (event.key == 'MetaLeft') {
    event.preventDefault();
  }
});