const input = document.getElementsByClassName("input");
const messageMistake = document.createElement("p");
let inputPassword = function (element, number) {
    element.onclick = function (event) {
        messageMistake.textContent="";
        const target = event.target;
        const icon = document.getElementById(`i${number}`);
        if (target.type === "password") {
            target.type = "text";
            icon.classList.add("fa-eye-slash");
            icon.classList.remove("fa-eye");
        } else if (target.type === "text") {
            target.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    }
};

inputPassword(document.getElementById("label1"), 1);
inputPassword(document.getElementById("label2"), 2);

buttonConfirmation.onclick = function (evt) {
    messageMistake.textContent = "";
    if (input[1].value.length > 0) {
        if (input[0].value === input[1].value) {
            messageMistake.textContent = "";
            alert("You are welcome");
        } else {
            messageMistake.textContent = "Нужно ввести одинаковые значения";
            messageMistake.style.color = "red";
            input[1].after(messageMistake)
        }
    }
};
