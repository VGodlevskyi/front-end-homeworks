function checkDeadline(teamSpeed, tasks, dateDeadline) {
    let sumTeamSpeed = 0, sumTasks = 0;
    sumTeamSpeed = teamSpeed.reduce((item1, item2) => item1 + item2);
    sumTasks = tasks.reduce((item1, item2) => item1 + item2);
    daysToDeadline = (new Date(dateDeadline) - new Date()) / (1000 * 60 * 60 * 24);

    let necessaryDays = function (sumTasks, sumTeamSpeed) {
        let result = 0;
        let weeks = Math.floor((sumTasks / sumTeamSpeed) / 5);
        for (let day = new Date().getDay(); day < (new Date().getDay() + (sumTasks / sumTeamSpeed)); day++) {
            for (let week = 0; week < weeks; week++) {
                if (day === 6 + (7 * week) || day === 7 + (7 * week)) {
                    result = result + 1;
                }
            }
            result = result + 1;
        }
        return result;
    };

    reserveDays = Math.ceil(daysToDeadline) - necessaryDays(sumTasks, sumTeamSpeed);
    if (reserveDays >= 0) {
        alert(`Все задачи будут успешно выполнены за ${Math.floor(reserveDays)} дней до наступления дедлайна!`);
    } else {
        alert(`Команде разработчиков придется потратить дополнительно ${Math.floor(Math.abs(reserveDays * 8))} часов после дедлайна, чтобы выполнить все задачи в беклоге`)
    }
}

checkDeadline([20, 30, 10, 40, 70, 90, 20, 30, 40], [100, 800, 1000], '2020,07,14');