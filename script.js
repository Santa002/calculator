let num1, num2 = '0';
let operator = '';
const calculate = document.getElementById('equal');
calculate.addEventListener('click', function(){
  if(operator == ''){
    return;
  }else
    evaluate(num1, operator, num1);
})

function setValues(e){
  value = e.target.value;
  if(value == '+' || value == '-' || value == 'x' || value == '/'){
    operator = value;
  }else if(operator == ''){
    if(num2 == '0'){
      num2 = value
    }else{
      num2 += value;
    }
  }else{
    if(num1 == '0'){
      num1 = value
    }else{
      num1 += value;
    }
  }
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