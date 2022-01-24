/**
 * реализовать функцию получения суммы пропущенных чисел
 * - функция принимает в себя массив целых чисел
 * - возвращает сумму всех пропущенных чисел переданного массива
 */
const arr1 = [1, 3, 5]; // 6
const arr2 = [0, 5, 6]; // 10
const arr3 = [1, 2, 3]; // 0
const arr4 = [43, 45]; // 44

const getSumByForgotten = arr => {
    let summNumbers = 0;

    for (let idx = 0; idx < arr.length; idx++) {
        for (let arrNums = arr[idx]; arrNums < arr[idx + 1]; arrNums++) {
            if (arr[idx] !== arrNums) {
                summNumbers += arrNums;
            }
        }
    }

    return summNumbers;
};

console.log(getSumByForgotten(arr1));
