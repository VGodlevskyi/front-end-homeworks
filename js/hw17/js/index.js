const validName = function (message, def) {
    let arg = '';
    while (arg === '' || arg === null || arg === undefined || !isNaN(arg)) {
        arg = prompt(message, def);
    }
    return arg;
};
let validGrade = function () {
    let subjectGrade = 0;
    while (isNaN(subjectGrade) || subjectGrade < 1 || subjectGrade > 12) {
        return true;
    }
};

let firstName = validName('Enter your first Name', 'Ivan');
let lastName = validName('Enter your last Name', 'Ivanov');
let averageGrade = 0,
    numberOfSubjects = 0,
    badGrades = 0,
    subjectGrade = 0;

const newUser = {
    name: firstName,
    'last name': lastName,
    tabel: {}
};

while (1>0) {
    subjectName = prompt(`Enter subject Name`, 'Math');
    if (!subjectName) break;
    if (validGrade) {
        subjectGrade = +prompt(`Enter subject grade`, 12);
    }
    numberOfSubjects++;
    averageGrade = (averageGrade + subjectGrade) / numberOfSubjects;
    if (subjectGrade < 4) {
        badGrades++;
    }
    newUser.tabel[subjectName] = subjectGrade;
}
console.log(`Средний балл ${averageGrade}`);
if (badGrades === 0) {
    alert(`Студент переведен на слудующий курс`)
}
if (averageGrade > 7) {
    alert(`Студенту назначена стипендия`);
}

console.log(newUser);



