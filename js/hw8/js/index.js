const input = document.createElement("input");
input.id = "text-input";
input.style.display = "block";
document.body.prepend(input);
const buttonReset = document.createElement("button");
const messageCurrentPrice = document.createElement("span");
const messageMistake = document.createElement("span");
messageCurrentPrice.textContent = 'price';
input.before(messageCurrentPrice);

input.addEventListener("focus", (evt) => {
    input.value = "";
    evt.target.style.cssText = "border: 5px solid green; display: block";
});
input.addEventListener("blur", (evt) => {
    let inputPrice = document.getElementById("text-input").value;

    if (inputPrice < 0 || isNaN(inputPrice)) {
        evt.target.style.cssText = "border: 1px solid red; display: block; color:red";
        messageCurrentPrice.textContent = "price";
        messageMistake.textContent = "Please enter correct price";
        input.after(messageMistake);
    } else {
        messageMistake.remove();
        evt.target.style.cssText = "border: 1px solid black; display:block;color:green;";
        messageCurrentPrice.textContent = `Текущая цена: ${inputPrice}`;
        buttonReset.textContent = 'X';
        messageCurrentPrice.after(buttonReset);
    }
});

buttonReset.addEventListener("click", (evt) => {
    input.style.cssText = "border: 1px solid black; display:block";
    input.value = '';
    messageCurrentPrice.textContent = 'price';
    buttonReset.remove();
    messageMistake.remove();
});
