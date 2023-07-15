const form = document.querySelector('form');
const add = document.querySelector('.add button');
const subtract = document.querySelector('.subtract button');
const divide = document.querySelector('.divide button');
const multiply = document.querySelector('.multiply button');
const clear = document.querySelector('.result button');
const toast = document.querySelector('.toast');

add.addEventListener('click', performOperation.bind(null, '+'));
subtract.addEventListener('click', performOperation.bind(null, '-'));
divide.addEventListener('click', performOperation.bind(null, '/'));
multiply.addEventListener('click', performOperation.bind(null, '*'));
clear.addEventListener('click', clearForm);

function performOperation(operator) {
  const fNumber = parseFloat(form.fnumber.value);
  const sNumber = parseFloat(form.snumber.value);

  let result;
  switch (operator) {
    case '+':
      result = fNumber + sNumber;
      break;
    case '-':
      result = fNumber - sNumber;
      break;
    case '/':
      result =fNumber / sNumber;
      break;
    case '*':
      result = fNumber * sNumber;
      break;
    default:
      result = '';
  }

  if (isNaN(result)) {
    showResult('Invalid!!');
  } else {
    showResult(`Result: ${result}`);
  }
}
function showResult(message) {
    toast.textContent = message;
    toast.classList.add('show');
  }

function clearForm() {
  form.reset();
}


