let count = 0;
let number = +prompt(`Enter the number, please`);

if (isNaN(number) || Math.abs(number) < 5) {
    console.log(`Sorry, no numbers`);
} else if (number > 0) {
    for (let i = 0; count <= number - 5; i++) {
        count = count + 5;
        console.log(count);
    }
} else {
    for (let i = 0; count >= number + 5; i--) {
        count = count - 5;
        console.log(count);
    }
}
