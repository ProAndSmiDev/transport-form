/*
* Реализовать функцию подсчета средней длины каждого слова в строке:
* - принимает строку-фразу
* - результатом является число - длина слова в среднем в этой строке, округленная до сотых
* - при передаче следующей фразы, предыдущая должна учитываться
* */
const phrase1 = 'Шла Саша по шоссе и сосала сушку';
const phrase2 = 'Аты-баты шли солдаты';
const phrase3 = 'Я хорошо знаю javascript';

const getAverageSummLetters = (phrase) => {
    let summLetters        = 0;
    let averageSummLetters = 0;
    let word               = '';

    word = phrase.split(' ');

    for (let i = 0; i < word.length; i++) {
        summLetters += word[i].length;
    }

    averageSummLetters = (summLetters / word.length).toFixed(2);

    return averageSummLetters;
};

const getFullSummByAverages = (...phrase) => {
    let averageLength = parseFloat(getAverageSummLetters(phrase[0]));
    let summByAverages = averageLength;

    if (phrase[1]) {
        return () => {
            let averageLength2 = parseFloat(getAverageSummLetters(phrase[1]));

            summByAverages += averageLength2 / 2;

            return (Math.floor(summByAverages * 100)) / 100;
        };
    } else {
        return summByAverages;
    }
};

console.log(getFullSummByAverages(phrase1, phrase2)());
console.log(getFullSummByAverages(phrase2));
