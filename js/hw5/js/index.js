const validName = function (message, def) {
    let arg = '';
    while (arg === '' || arg === null || arg === undefined || !isNaN(arg)) {
        arg = prompt(message, def);
    }
    return arg;
};

const validBirthDate = function (message, def) {
    let birthday = '01.01.1000';
    while (birthday.slice(6, 10) < 1900 || birthday.slice(6, 10) > 2004 || birthday.slice(3, 5) > 12 || birthday.slice(3, 5) < 1 || birthday.slice(0, 2) > 31 || birthday.slice(0, 2) < 1) {
        birthday = prompt(message, def);
    }
    return birthday;
};

const createNewUser = function (firstName, lastName, birthday) {
    firstName = validName('Enter your first Name', 'Ivan');
    lastName = validName('Enter your last Name', 'Ivanov');
    birthday = validBirthDate(`Enter your birthday`, 'dd.mm.yyyy');

    const newUser = {
        firstName,
        lastName,
        birthday,
        getAge: function () {
            return Math.floor((new Date() - new Date(`${birthday.slice(6, 10)}-${birthday.slice(3, 5)}-${birthday.slice(0, 2)}`)) / (1000 * 60 * 60 * 24 * 365));
        },
        getLogin: function () {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
        },
        getPassword: function () {
            return this.firstName[0].toUpperCase() + this['lastName'].toLowerCase() + birthday.slice(6, 10);
        },
    };
    console.log(`User has ${newUser.getAge()} years`);
    console.log(`login -  ${newUser.getLogin()}`);
    console.log(`Password -  ${newUser.getPassword()}`);
    return newUser;
};
createNewUser();
