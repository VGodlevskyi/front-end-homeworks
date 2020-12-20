// // alert("Hi FILE ");
// // alert("Hi FILE drbveraWE");
// // console.log("Li");
// let name = "Vasia";
// // console.log(name);
// const AGE = 33;
// console.log(AGE + typeof AGE);
//
// const agree = +confirm("Are you ready!");
// console.log(typeof agree  + agree);
// //
// // let favoriteNumber = +prompt("Your favorite number, please");
// // console.log(favoriteNumber);
// // console.log(typeof favoriteNumber);
// //
// let name = prompt("Введите Имя");
// let age = +prompt("Ввведите ваш возвраст");
// alert("Имя " + name + "Возраст" + age);
// // const agree = confirm("Are you ready");
// // console.log(agree);
// // let fre;
// // console.log(typeof agree);
// // console.log(fre);
// let result = null;
// result  = name +name;
//
// //
// // result = name + age;
// // console.log("result " +result);
// // console.log("typeof  result  " + typeof  result);
// //
// //
// // result = age + age;
// // console.log("result " +result);
// // console.log("typeof  result  " + typeof  result);
// //
// //
// //
// // result = age + name;
// // console.log("result " +result);
// // console.log("typeof  result  " + typeof  result);
// //
// // result = false + age;
// // console.log("result " +result);
// // console.log("typeof  result  " + typeof  result);
// //
// // result = name / false;
// // console.log("result " +result);
// // console.log("typeof  result  " + typeof  result);
// //
// //
// // result = "" / age;
// // console.log("result " +result);
// // console.log("typeof  result  " + typeof  result);
// //
// result = !true;
// console.log("result" + result);
// const PERIOD = 0.00001;
// console.log(PERIOD);
// console.log(PERIOD.toString(16));
// console.log(typeof PERIOD.toString(16));
//
// console.log(Math.floor(1.9));
// console.log(Math.ceil(1.2));
// console.log(Math.round(20.49));
// console.log((0.2 + 0.4).toFixed(0));
// console.log(1e308);
// console.log(isNaN(5));
// console.log(isFinite(NaN));
// console.log(isFinite(-1e319));
// console.log(isFinite(5));
//
// console.log(parseInt("1003+45444cc"));
// console.log(parseFloat("12.5edf"));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.max(3, 5, 322, 3, 1, 2, -1233));
// console.log(Math.min(-13, 43, 3));
// console.log(Math.pow(2,55));
//
// const wer = Number("infinity");
// console.log(wer);
// const we = String("2341341");
// console.log(we);
//
// console.log(Boolean("avsweve"));

// console.log(4 == "4");
// console.log(0=="0");
// console.log(1 !== 2);


/*
==
===

!=
!==
>
<
>=
<=

 */
// console.log(null == undefined); /*true*/
// console.log(null === undefined); /*false*/
// console.log("five" == "five");

// number = +prompt();
//
// if (number > 0 && number < 10) {
//     console.log('hi!');
// } else if (number >= 11 && number <= 20) {
//     console.log("bay")
// }
//
// else{
//     console.log("try again")
// }

// 1- americano 2- capuch 3- latte 4 -error
// cofeVar = +prompt();
// switch (cofeVar) {
//     case 1:
//         console.log("americano");
//         break;
//     case 2:
//         console.log("capuch");
//         break;
//     case 3:
//         console.log("latte");
//         console.log("latte2");
//         console.log("latte3");
//         break;
//     default:
//         console.log("error");
//         break;
// }
// Number = 4556;
// console.log(`Text    ${Number} ${Math.random()}`);
//
// let age = 19;
// let access = false;
// if (age > 18) {
//     acces = true;
//     console.log(`access ${access}. Come on!`)
// } else {
//     access = false;
// }
// // ternarny operator
// access = age >= 18 ? true : false;
// if (access) {
//     console.log(`access ${access}. Come on!`)
// } else {
//     console.log(`access ${access}. Go away!`)
// }

// userName = prompt();
//
// switch (userName) {
//     case `Mike`:
//         console.log(`Hi Mike CEO`);
//         break;
//     case `Jane`:
//         console.log(`Hi Mike CTO`);
//         break;
//     case `Walter`:
//         console.log(`Hi Mike manager`);
//         break;
//     case `Oliver`:
//         console.log(`Hi Mike programmer`);
//         break;
//     case `Joun`:
//         console.log(`Hi Mike cleaner`);
//         break;
//     default:
//         console.log(`User not found`)
// }

// let number1 = +prompt(`1`);
// let number2 = +prompt(`1`);
// let number3 = +prompt(`1`);
// if (isNaN(number1) || isNaN(number2) || isNaN(number3)){
//     console.log(`input no correct`)
// } else if
// ((number1 > number2) && (number1 > number3))
// {
//     console.log(`Max ${number1}`)
// } else if  ((number2 >number1) && (number2 > number3)){
//     console.log(`Max ${number2}`)
// } else {
//     console.log(`Max ${number3}`)
// }

// // ternarny operator
// access = age >= 18 ? true : false;

let number1 = +prompt(`1`);
let number2 = +prompt(`1`);
let number3 = +prompt(`1`);
if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    console.log(`input no correct`)
} else {
    result = number1 > number2 && number1 > number3 ? number1 : number2 > number1 && number2 > number3 ? number2 : number3;
    console.log(`max number is ${result}`);
}
Задача кофейный апарат 10 25 50 коп, кофе 25 капучино 50 чай 10
Программа должна сдать, сколько денег внес пользователь, какой напиток он желает.
Ваш напиток готов. Возьмите сдачу: "Сумма сдачи"
Ваш напикок готов. Спасибо за сумму без сдачи

l


