const numbers = document.querySelectorAll('.nums');
const textArea = document.querySelector('#screen');
const divide = document.querySelector('#divide');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
let displayValue1 = 0;
let displayValue2 = 0;
let operator = '';

numbers.forEach(nums => {
  nums.addEventListener('click', event => {
    textArea.value += event.target.id;
  });
});

divide.addEventListener('click', event => {
  if (displayValue1 != 0) {
    displayValue2 = textArea.value;
    displayValue1 = operate(operator, displayValue1, displayValue2);
    displayValue2 = 0;
  } else {
    displayValue1 = textArea.value;
  }
  operator = 'divide';
  textArea.value = '';
});

add.addEventListener('click', event => {
  if (displayValue1 != 0) {
    displayValue2 = textArea.value;
    displayValue1 = operate(operator, displayValue1, displayValue2);
    displayValue2 = 0;
  } else {
    displayValue1 = textArea.value;
  }
  operator = 'add';
  textArea.value = '';
});

subtract.addEventListener('click', event => {
  if (displayValue1 != 0) {
    displayValue2 = textArea.value;
    displayValue1 = operate(operator, displayValue1, displayValue2);
    displayValue2 = 0;
  } else {
    displayValue1 = textArea.value;
  }
  operator = 'subtract';
  textArea.value = '';
});

multiply.addEventListener('click', event => {
  if (displayValue1 != 0) {
    displayValue2 = textArea.value;
    displayValue1 = operate(operator, displayValue1, displayValue2);
    displayValue2 = 0;
  } else {
    displayValue1 = textArea.value;
  }
  operator = 'multiply';
  textArea.value = '';
});

equals.addEventListener('click', event => {
  displayValue2 = textArea.value;
  textArea.value = operate(operator, displayValue1, displayValue2);
});

clear.addEventListener('click', event => {
  textArea.value = '';
  displayValue2 = 0;
  displayValue1 = 0;
});

const addFunc = function(a, b) {
  return +a + +b;
};

const subtractFunc = function(a, b) {
  return a - b;
};

const multiplyFunc = function(a, b) {
  return a * b;
};

const divideFunc = function(a, b) {
  console.log('divide');
  if (b == 0) {
    alert("Can't divide by zero.");
    return b;
  }
  console.log(a / b);
  return a / b;
};

const operate = function(operator, a, b) {
  if (operator == 'add') {
    return addFunc(a, b);
  } else if (operator == 'subtract') {
    return subtractFunc(a, b);
  } else if (operator == 'multiply') {
    return multiplyFunc(a, b);
  } else if (operator == 'divide') {
    return divideFunc(a, b);
  }
};
