let buffer = '0';
let runningTotal = 0;
let prevOperator = null;
const display = document.querySelector('.display');

function reRender() {
  //round to 15 char length
  if (buffer.length > 15) {
    buffer = buffer.slice(0, 15);
  }
  display.innerText = buffer;
}

function handleMath(symbol) {
  const operand = parseInt(buffer);
  if (prevOperator === null) {
    runningTotal = operand;
  } else {
    flushOperation(operand);
  }

  // we have an operator in memory
  // for the next operation
  prevOperator = symbol;

  // assign 0 to buffer for next operand
  buffer = '0';
}

function flushOperation(operand) {
  if (prevOperator === '+') {
    runningTotal += operand;
  } else if (prevOperator === '-') {
    runningTotal -= operand;
  } else if (prevOperator === 'x') {
    runningTotal *= operand;
  } else if (prevOperator === '÷') { // being explicit helps readability
    runningTotal /= operand;
  }
}

function handleSymbol(symbol) {
  switch (symbol) {
    case 'C':
      buffer = '0';
      runningTotal = 0;
      prevOperator = null;
      break;
    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.slice(0, -1);
      }
      break;
    case '±':
      if (!(buffer === '0')) {
        buffer = -1 * parseInt(buffer);
      }
      break;
    case '.':
      if (!(buffer.includes('.'))) {
        buffer = buffer + '.';
      }
      break;
    case '=':
      if (prevOperator === null) {
        // need two numbers to do math
        return;
      }

      flushOperation(parseInt(buffer));

      // expression done, no need save runningTotal and prevOperator
      buffer = '' + runningTotal; // save it as a string
      runningTotal = 0;
      prevOperator = null;
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      handleMath(symbol);
      break;
    default:
      buffer = '0';
  }
}

// TODO: handle floating point numbers
function handleNumber(value) {
  if (buffer === '0') {
    buffer = value
  } else {
    buffer += value
  }
}

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  reRender();
}

function init() {
  document
    .querySelector('.buttons')
    .addEventListener('click', function(event) {
      buttonClick(event.target.innerText);
    });
}

init();
