const getExp = (x, n) => {
    return x ** n;
    //return Math.pow(x, n);
  }
  
let num1 = +prompt('Введите первое число:');
let num2 = +prompt('Введите второе число:');
  
console.log(getExp(num1,num2));