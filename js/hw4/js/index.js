const validName = function (message, def) {
    let arg = '';
    while (arg === '' || arg === null || arg === undefined || !isNaN(arg)) {
        arg = prompt(message, def);
    }
    return arg;
};

const createNewUser = function (firstName, lastName) {
    firstName = validName('Enter your first Name', 'Ivan');
    lastName = validName('Enter your last Name', 'Ivanov');

    const newUser = {
        firstName,
        lastName,
        getLogin: function () {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
        },
    };
    return newUser;
};

console.log(createNewUser().getLogin());

