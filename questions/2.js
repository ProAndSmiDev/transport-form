/*
* Расширить список стандартных функций массива:
* - не должен определять метод массива если он уже имеется
* - результатом является массив, включающий в себя элементы первого и второго и отсортированные по возрастанию
* - запрещено использовать готовые методы сортировки массивов
* - если дается массив не отсортированный по возрастанию, вернуть исключение (ошибку)
* */
const arr1 = [1, 2, 3];
const arr2 = [1, 1, 2, 2, 5];
const arr3 = [3, 2, 5];
const arr4 = [3, 3, 5, 7];

Array.prototype.joinArray = function (arr) {
    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] <= arr[idx + 1]) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] <= this[i + 1]) {
                    const concatedArrays = this.concat(arr);

                    for (let cai = 0; cai < concatedArrays.length - 1; cai++) {
                        let mainIdx = cai;

                        for (let cai2 = cai + 1; cai2 < concatedArrays.length; cai2++) {
                            if (concatedArrays[cai2] < concatedArrays[mainIdx]) {
                                mainIdx = cai2;
                            }
                        }

                        let currentItem = concatedArrays[mainIdx];

                        concatedArrays[mainIdx] = concatedArrays[cai];
                        concatedArrays[cai]     = currentItem;
                    }

                    return concatedArrays;
                } else {
                    return 'Wrong main array!';
                }
            }
        } else {
            return 'Wrong func array!';
        }
    }
};

console.log(arr1.joinArray(arr2));
