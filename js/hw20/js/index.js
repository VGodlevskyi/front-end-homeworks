const filterCollection = function (arr, keyWords, flag, ...itemsForCheck) {

        // создаем массив из ключевых слов
        keyWord = [];
        let indexKey = 0;
        for (let i = 0; i < keyWords.length; i++) {
            if (keyWords[i] === " ") {
                keyWords.length
                keyWord.push(keyWords.slice(indexKey, i));
                if (keyWords.lastIndexOf(" ", i)) {
                    keyWord.push(keyWords.slice(i + 1, keyWords.length))
                }
                indexKey = i + 1;
            }
        }
//проверка на совпадение всех ключевых слов
        if (flag === true) {
            for (let item of vehicles) {
                for (let i = 0; i < keyWord.length; i++) {
                    console.log(`${item}    ${keyWord[i]}`);
                    if (item.includes(keyWord[i])) {
                        if (i === keyWord.length - 1) {
                            filterArr.push(item);
                        }
                    } else {
                        break;
                    }
                    ;
                }

            }
            //проверка на совпадение по любому из ключевых слов
        } else if (flag === false) {
            for (let itemCheck of vehicles) {
                for (let itemKey of keyWord) {
                    if (itemCheck.includes(itemKey)) {
                        filterArr.push(itemCheck);
                    }
                }
            }
        }

        console.log(filterArr);
    }
;
//массив из элементов с совпадениями
filterArr = [];

vehicles = ["Toyota Ukraine", "sasvsdafase", "contentType.en_US", "scvwv", "28", "", "Toyota en_US", "en_US sdsd"];

filterCollection(vehicles, 'en_US Toyota', false, 'name', 'description', 'contentType.name', 'locales.name', 'locales.description');


// const filterBy = function (arr, dataType) {
//     let newArr = [];
//     for (let item of arr) {
//         if (typeof (item) !== dataType) {
//             newArr.push(item);
//         }
//     }
//     return (newArr);
// };
//
// console.log(filterBy(['hello', 'world', 23, '23', null, true], 'string'));
