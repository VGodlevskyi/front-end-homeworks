// function functionName() {
//     console.log(`function done`);
//     return 0;
// }
//
// const functionName= function(){
//     console.log(`function done`);
//     return 0;
// };
//
// const someString  =   "function";
//
// // console.log(functionName());
//
// const userName=prompt(`Write your name`);
// const userAge=prompt(`Write your age`);

//
//
// const calc = function (a, b) {
//     a *= 2;
//     b *= 2;
//     return a + b;
// };
// const num1 = 3;
// const num2 = 4;
// console.log(calc(num1, num2));


// const calkSum = function (a, b) {
// //        return a + b;
// // };
// // console.log(calkSum(+prompt(),+prompt()));

// Посчитать кол-во переданных аргументов и вернуть его

// const   paramCounter = function () {
//     console.log(arguments);
//     console.log(arguments.length);
// };
// paramCounter(2,3,4,5,6);

// const count = function (a, b) {
//     if (a > b) {
//         console.log(`⛔️ Ошибка! Счёт невозможен.»`);
//     } else if (a < b) {
//         counterLoop(a,b);
//     } else {
//         console.log(`«⛔️ Ошибка! Нечего считать.»`);
//     }
// };
//
// function counterLoop(a,b){
//     console.log(`Отсчет начат`);
//     for (let i = a; i <= b; i++) {
//         console.log(i);
//     }
//     console.log(`отсчет завершен`);
// }
//
// count(+prompt(`введите начало отсчета`), +prompt('введите окончание отсчета'));

// const count = function (startCount, endCount, divine) {
//     if (arguments.length === 3) {
//         startCount = +startCount;
//         endCount = +endCount;
//         divine = +divine;
//         if (checkingNumber(startCount) && checkingNumber(endCount) && checkingNumber(divine)) {
//             if (startCount < endCount) {
//                 counterLoop(startCount, endCount, divine);
//             } else if (startCount > endCount) {
//                 console.log(`⛔️ Ошибка! Счёт невозможен.»`);
//             } else {
//                 console.log(`«⛔️ Ошибка! Нечего считать.»`);
//             }
//         } else {
//             console.log(`неверное значение`);
//         }
//     }
// }
//
// function counterLoop(startCount, endCount, divine) {
//     console.log(`Отсчет начат`);
//     for (let i = startCount; i <= endCount; i++) {
//         if (i % divine === 0) {
//             console.log(i);
//         }
//     }
//     console.log(`отсчет завершен`);
// }
//
// function checkingNumber(number) {
//     if (!isNaN(number) && number !== undefined && number !== null && number !== `` && number < Infinity && number > -Infinity) {
//         console.log(number);
//         return true;
//     } else {
//         debugger;
//         console.log(number);
//         return false;
//     }
// }
//
// count(3, 55, `adergvwre`);

// let HumanConstructor = function (name, age, lastname, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this["last name"] = lastname;
// };
// const human1 = new HumanConstructor(`vasya`, 30, `pupkin`, `male`);
// console.log(human1);
// console.log(this);
// var a=3;
// window.b=5;
// let c=876;
// function fName()


//
// const person = {
//     name: "Ivan",
//     surname: "petrov",
//     prof: `prog`,
//     sayHi: function () {
//         console.log(`Hello, my name is ${this.name} ${this.surname}`);
//     },
//     changeProperty: function (property, value) {
//         if (this[property]) {
//             this[property] = value;
//         } else {
//             console.log(`error`);
//         }
//     },
//     createProperty: function (property, value) {
//         if (!this.hasOwnProperty(property)) {
//             this[property] = value;
//         } else {
//             console.log(`error!! This property already exist`);
//         }
//     }
// };
// person.changeProperty('name', `Alexan`);
// console.log(person.name);
// person.createProperty('profes', 'manager');
// console.log(person.profes);


// task4
const user = {
    firstName: "Walter",
    lastName: "White",
    job: "Programmer",
    pets: {
        cat: "Kitty",
        dog: "Doggy",
    },
};
for (const key in user) {
    if (typeof (user[key] === 'object')) {
        for (const key2 in user[key]) {
            console.log(`${key2} ${typeof user[key][key2]} user[key][key2]`);
        }
    } else {
        console.log(`${key}: ${typeof user[key]} user[key]`);
    }
}