let buffer = '0';
let runningTotal = 0;
let prevOperator = null;
let floatOperation = false;
const display = document.querySelector('.display');

function reRender() {
  // consequent actions will be on floats
  if (buffer.includes('.')) {
    floatOperation = true;
  }

  // round to 15 char length
  if (buffer.length > 15) {
    buffer = buffer.slice(0, 15);
  }

  display.innerText = buffer;
}

function parse(buffer) {
  if (floatOperation) {
    return parseFloat(buffer);
  } else {
    return parseInt(buffer);
  }
}

function handleMath(symbol) {
  const operand = parse(buffer);
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
        buffer = -1 * parse(buffer);
        buffer = '' + buffer; // convert back to a string
      }
      break;
    case '.':
      if (!(buffer.includes('.'))) {
        buffer = buffer + '.';
      }
      break;
    case '=':
      // need two numbers to do math
      if (prevOperator === null) {
        return;
      }

      flushOperation(parse(buffer));

      // expression done, no need save runningTotal and prevOperator
      buffer = '' + runningTotal; // save it as a string
      runningTotal = 0;
      prevOperator = null;
      floatOperation = false;
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

function handleNumber(value) {
  if (buffer === '0') {
    buffer = value
  } else {
    buffer += value
  }
}

function buttonClick(value) {
  // checking if its a number or not
  // no need to use custom parse, for a int or float
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
