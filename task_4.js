function countEverySecond(num1, num2) {
    let countedItem = num1;

    let intervalId = setInterval(function () {
        if (countedItem <= num2) {
            console.log(countedItem);
            countedItem++;
        }
        else clearInterval(intervalId);
    }, 1000);
}

let num1 = +prompt('Введите первое число:');
let num2 = +prompt('Введите второе число:');

countEverySecond(num1, num2);