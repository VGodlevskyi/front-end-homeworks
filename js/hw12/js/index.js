const images = document.querySelectorAll(".image-to-show");
const buttonStop = document.createElement("button");
buttonStop.textContent = "Прекратить";
document.body.prepend(buttonStop);


const startShow = function () {
    const show = setInterval(() => {

            for (let i = 0; i < images.length; i++) {
                if (images[i].classList.contains("visible") && i === 3) {
                    images[i].classList.remove("visible");
                    images[0].classList.add("visible");
                    break
                } else if (images[i].classList.contains("visible") && i < 3) {
                    images[i + 1].classList.add("visible");
                    images[i].classList.remove("visible");
                    break
                }
            }
        },
        2000);
    buttonContinue.disabled = true;
    buttonStop.addEventListener("click", () => {
        clearInterval(show);
        buttonContinue.disabled = false;
    });
};

const buttonContinue = document.createElement("button");
buttonContinue.textContent = "Возобновить показ";
buttonStop.after(buttonContinue);
buttonContinue.addEventListener("click", () => {
    startShow();
});
startShow();