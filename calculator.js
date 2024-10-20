let buffer = '0';
const display = document.querySelector('.display');

function reRender(value) {
  display.innerText = value;
}

function handleMath(value) {
  // TODO
}

function handleSymbol(value) {
  switch (value) {
    case 'C':
      buffer = '0';
      break;
    case '←':
      buffer = buffer.slice(0, -1);
      break;
    case '±':
      buffer = -1 * parseInt(buffer);
      break;
    case '.':
      if (!(buffer.includes('.'))) {
        buffer = buffer + '.';
      }
      break;
    case '=':
      // TODO
      break;
    case '÷':
    case 'x':
    case '-':
    case '+':
      handleMath(buffer);
      break;
    default:
      buffer = '0';
  }
  reRender(buffer);
}

function handleNumber(value) {
  console.log(typeof parseInt(value));
  if (buffer === '0') {
    buffer = value
  } else {
    buffer += value
  }
  reRender(buffer);
}

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

function init() {
  document
    .querySelector('.buttons')
    .addEventListener('click', function(event) {
      buttonClick(event.target.innerText);
    });
}

init();
