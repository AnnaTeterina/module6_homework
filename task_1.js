let arr = [9, 0, 32, 99, 10, 7, 'a', null, true];

function countItems(arr) {
  let countEven = 0;
  let countOdd = 0;
  let countOther = 0;

  for (let i = 0; i < arr.length; i++){
      if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
          countOther++;
      } else if (arr[i] % 2 === 0) {
          countEven++;
      } else {
          countOdd++;
      }
  }

  console.log(`Количество четных элементов: ${countEven}`);
  console.log(`Количество нечетных элементов: ${countOdd}`);
  console.log(`Количество других элементов: ${countOther}`);
}

countItems(arr);