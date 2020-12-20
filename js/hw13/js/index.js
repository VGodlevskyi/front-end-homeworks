const buttonTheme = document.createElement("button");
buttonTheme.textContent = "Сменить тему";
document.body.prepend(buttonTheme);
let flag = localStorage["flag"];

let colorTitle = document.querySelector(".text-blue");
if (localStorage["colorTitle"]!==undefined) {
    colorTitle.style.color = localStorage["colorTitle"]
}
let backgroundHeader = document.querySelector(".menu-header");
if (localStorage["backgroundHeader"]!==undefined) {
    backgroundHeader.style.background = localStorage["backgroundHeader"]
}
let footerBackground = document.querySelector(".footer-zone");
if (localStorage["footerBackground"]!==undefined) {
    footerBackground.style.background = localStorage["footerBackground"]
}


buttonTheme.addEventListener("click", () => {
    if (flag === 0 || flag === undefined) {
        flag = 1;
        colorTitle.style.color = "red";
        localStorage["colorTitle"] = "red";
        backgroundHeader.style.background="aquamarine";
        localStorage["backgroundHeader"] = "aquamarine";
        footerBackground.style.background="pink";
        localStorage["footerBackground"] = "pink";

    } else if (flag === 1) {
        flag = 0;
        colorTitle.style.color = "#4BCAFF";
        localStorage["colorTitle"] = colorTitle.style.color;
        backgroundHeader.style.background = "#35444F";
        localStorage["backgroundHeader"] = "#35444F";
        footerBackground.style.background = "rgba(99, 105, 110, 0.48)";
        localStorage["footerBackground"] = "rgba(99, 105, 110, 0.48)";
       }
});

