const switchingTabs = function (tabs, tabsContent) {
    const text = document.createElement("p");
    tabs[0].classList.add("active");
    text.textContent = tabsContent[0].innerText;
    document.body.after(text);
    document.body.addEventListener("click", (evt) => {
            const target = evt.target;
            if (target.classList == "tabs-title") {
                for (let i = 0; i < tabs.length; i++) {
                    tabs.forEach((item) => {
                        item.classList.remove("active");
                    });
                    text.textContent = "";
                    document.body.after(text);
                    target.classList.add("active");
                    tabsContent.forEach((item) => {
                        if (item.dataset.title === target.innerText) {
                            text.textContent = item.innerText;
                        }
                    });
                }
            }
        }
    );
}

switchingTabs(document.querySelectorAll(".tabs-title"), document.querySelectorAll(".tabs-content-item"));
