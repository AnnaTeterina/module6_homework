function primeNumber(num) {
    let result;
    
    if (num < 2 || num > 1000 || !Number.isInteger(num)) {
      result = "Данные неверны.";
    } else if (num === 2) {
      result = "Это простое число.";
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          result = "Это не простое число.";
        } else {
          result = "Это простое число.";
        }
      }
    }
    return result;
}
  
primeNumber(4);