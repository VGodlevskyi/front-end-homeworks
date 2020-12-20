const table = document.createElement("table");
const arrTd = [];
document.body.prepend(table);

for (let i = 0; i < 30; i++) {
    const tr = document.createElement("tr");
       table.append(tr);
    for (let i1 = 0; i1 < 30; i1++) {
        const td = document.createElement("td");

        arrTd.push(td);
        td.style.cssText = "width:20px; height:20px; border: 2px solid black;";
        td.classList.add("white");
        tr.append(td);
    }
}
console.log(arrTd);
table.addEventListener("click", (evt) => {
    const target = evt.target;

    if (target.classList == "black") {
        target.classList.remove("black");
        target.classList.add("white");

    } else if (target.classList == "white") {
        target.classList.remove("white");
        target.classList.add("black");
    }
    console.log(target);
});
document.body.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target === table || target.nodeName === "TD") {
        console.log(target.nodeName);
    } else if (target !== undefined) {
        console.log(target.nodeName);
        console.log(table);
        arrTd.forEach((item) => {
            if (item.classList == "white") {
                item.classList = "black";
            } else if (item.classList == "black") {
                item.classList = "white";
            }
        });
    }
});



