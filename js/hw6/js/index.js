const filterBy = function (arr, dataType) {
    let newArr = [];
    newArr = arr.filter((element) => typeof (element) !== dataType);
    return (newArr);
};
console.log(filterBy(['hello', 'world', 23, '24', null, true], 'number'));
