const buttonDrawCirkle = document.getElementById("button");
const input = document.createElement("input");
const buttonDraw = document.createElement("button");
const circle = document.createElement("div");
let circlesBox = document.createElement("div");

buttonDrawCirkle.addEventListener("click", (evt) => {
    buttonDraw.textContent = "Нарисовать";
    buttonDrawCirkle.after(input);
    input.after(buttonDraw);

});

buttonDraw.addEventListener("click", (evt) => {
    circlesBox.remove();
    circlesBox = document.createElement("div");
    buttonDraw.after(circlesBox);


    if (!isNaN(input.value)) {
        for (let i = 0; i < 100; i++) {
            circle.style.cssText = ` width:${input.value}px; height:${input.value}px; border-radius:50%; display:inline-block;`;
            circle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            circle.classList.add("circles");
            circlesBox.prepend(circle.cloneNode(false));
        }
    } else (input.value = "");
    circlesBox.addEventListener("click", (event) => {
        const target = event.target;
        if (target !== circlesBox) {
            target.remove();
        }
    });
});
