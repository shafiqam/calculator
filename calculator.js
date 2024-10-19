let buffer = '0';

function handleSymbol(value) {
  console.log('symbol');
}

function handleNumber(value) {
  if (buffer === '0') {
    buffer = value
  } else {
    buffer += value
  }
  console.log(buffer);
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
