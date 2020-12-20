let number=+prompt(`Введите число, пожалуйста`);
const factorial= function(number) {
    return (number === 1) ? number : (number * factorial(number - 1));
};
alert(`Факториал от числа  ${number}  равен  ${factorial(number)}`);