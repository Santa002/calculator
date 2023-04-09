let num1, num2 = '0';
let operator = '';

const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.getElementById('equal');
const decimalBtn = document.getElementById('decimal');
const deleteBtn = document.getElementById('delete');
const clearBtn = document.getElementById('clear');

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

function keyInput(e){
  
}

function evaluate(num1, operator, num2){
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