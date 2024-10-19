function handleSymbol(value) {
  console.log('symbol');
}

function handleNumber(value) {
  console.log('number');
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
