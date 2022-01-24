/*
* Реализовать функцию подсчета рейтинга:
* - принимает массив, состоящий из количества голосов за оценку
* - результатом является массив со средней оценкой голосов и количеством звезд
* */
const arr1 = [0, 5, 1, 3, 40];
const arr2 = [0, 0, 3, 0, 23];
const arr3 = [0, 2, 1, 35, 0];

const getRate = (arr) => {
    let averageNumber = 0,
        summNumbers   = 0,
        rate          = 0,
        stars         = '',
        result        = [];

    for (let i = 0; i < arr.length; i++) {
        averageNumber += arr[i];
        summNumbers += arr[i] * (i + 1);
    }

    rate = (summNumbers / averageNumber);

    for (let c = 0; c < rate.toFixed(0); c++) {
        stars += '*';
    }

    result = [rate.toFixed(2), stars];

    return result;
};

console.log(getRate(arr1));
