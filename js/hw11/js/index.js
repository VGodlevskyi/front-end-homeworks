const buttons = document.querySelectorAll(".btn");
document.addEventListener("keydown", handler);

function handler(e) {
    for (let i = 0; i < buttons.length; i++) {
        if ("Key" + buttons[i].textContent === e.code || buttons[i].textContent === e.key) {
            buttons[i].style.backgroundColor = "blue";
        } else (buttons[i].style.backgroundColor = "black")
    }
}
