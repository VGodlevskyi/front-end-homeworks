let userName = prompt(`What's your name?`, '');
let userAge = +prompt(`How old are you?`, '');
if (userAge > 22) {
    alert(`Welcome, ${userName}`);
} else if (userAge < 18) {
    alert(`You are not allowed to visit this website`);
} else {
    userAge = confirm(`Are you sure you want to continue?`);
    if (userAge) {
        alert(`Welcome, ${userName}`);
    } else {
        alert(`You are not allowed to visit this website`);
    }
}

