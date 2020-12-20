const arrToList = function (arr) {
    const arrList = arr.map(function callback(item) {
        return `<li> ${item} </li>`;
    });
    const ul = document.createElement("ul");
    document.body.prepend(ul);
    arrList.forEach(item => ul.insertAdjacentHTML('beforeend', item));
};

arrToList(['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);
