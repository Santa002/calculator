let num1, num2 = '0';
let operator = '';

const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.getElementById('equal');
const decimalBtn = document.getElementById('decimal');
const deleteBtn = document.getElementById('delete');
const clearBtn = document.getElementById('clear');
const prev = document.getElementById('prev');
const current = document.getElementById('current');

window.addEventListener('keydown', keyInput);
equalBtn.addEventListener('click', evaluate);
decimalBtn.addEventListener('click', decimal);
deleteBtn.addEventListener('click', deleteNum);
clearBtn.addEventListener('click', clear);

numberBtns.forEach((btn) => 
  btn.addEventListener('click',  () => addNumber(btn.textContent))
)

operatorBtns.forEach((btn) => 
  btn.addEventListener('click', () => setOperator(btn.textContent))
)

function addNumber(x){
  if(current.textContent === '0')
    current.textContent = '';
  current.textContent += x;
}

function setOperator(x){
  if(operator != null) evaluate()
  num1 = current.textContent
  operator = x;
  prev.textContent = `${num1} ${operator}`;
  current.textContent = '';
}

function decimal(){
  if(current.textContent === '')
    current.textContent = '0';
  if(current.textContent.includes('.'))
    return
  current.textContent += '.'
}

function clear(){
  current.textContent = '0';
  prev.textContent = '';
  num1, num2  = '';
  operator = null;
}

function deleteNum(){
  current.textContent = current.textContent.toString().slice(0, -1);
}



function keyInput(e){
  if(e.key >= 0 && e.key <= 9)
    addNumber(e.key);
  else if(e.key === '.')
    decimal();
  else if(e.key === 'Backspace')
    deleteNum();
  else if(e.key === 'Escape')
    clear();
  else if(e.key === '=' || e.key === 'Enter')
    evaluate()
  else if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    setOperator(e.key)
}

function evaluate(){
  if(operator == null) return;
  num2 = current.textContent;
  current = operation(num1, operator, num2);
  prev.textContent = `${num1} ${operator} ${num2}`;
  current.textContent = '0';
}

function operation(num1, operator, num2){
  num1 = Number(num1);
  num2 = Number(num2);
  switch(operator){
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'x':
      return num1*num2;
    case '/':
      if(num2 == 0){
        alert("Can't divide by zero");
        reset();
      }else
        return num1/num2;
  }
}



console.log(evaluate('5', '+', 3))
console.log(evaluate(5, '-', 3))
console.log(evaluate(5, 'x', 3))
console.log(evaluate(5, '/', 3))