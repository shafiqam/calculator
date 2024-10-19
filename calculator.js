let buffer = '0';
const display = document.querySelector('.display');

function reRender(value) {
  display.innerText = value;
}

function handleSymbol(value) {
  console.log('symbol');
}

function handleNumber(value) {
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
