let a = +prompt(`Введите первое число`);
let b = +prompt(`Введите второе число`);
let op = prompt(`введите арифметическое действие: + , - , * или / `);

//Сделав проверку через отдельную функцию, увидел, что это необязательное задание, закоментил))
// if (checkingNumber(a) === false || checkingNumber(b) === false || (op !== '+' && op !== '-' && op !== '*' && op !== '/')) {
//     console.log(`некорректный ввод`)
// } else {

console.log(`${a} ${op} ${b} = ${(mathOp(a,b,op))}`);
// }
function mathOp(a, b, op) {
    if (op === `+`) {
        return a + b;
    } else if (op === `-`) {
        return a - b;
    } else if (op === `*`) {
        return a * b;
    } else if (op === `/`) {
        return a / b;
    }
}


// function checkingNumber(number) {
//     return (
//         !isNaN(number) &&
//         number !== undefined &&
//         number !== null &&
//         number !== "" &&
//         number < Infinity &&
//         number > -Infinity
//     );
// }
