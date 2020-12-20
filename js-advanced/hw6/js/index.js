const grid = document.createElement('table');
grid.className = "wrap";
document.body.append(grid);
let arrCell = [];
let arrNumber = [];

class Field {
    constructor() {
        this.arrCell = arrCell;
        this.arrNumber = arrNumber;
    }

    buildField(number) {
        for (let i = 0; i < number; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.backgroundImage = "";
            this.arrCell.push(cell);
            this.arrNumber.push(i);
            grid.appendChild(cell);
        }
    }
}

class Cell {
    constructor() {
        this.arrNumber = arrNumber;
    }

    activeCell() {
        return this.arrNumber.splice(Math.floor(Math.random() * this.arrNumber.length), 1);
    }
}

class Game {
    constructor(level = "easy") {
        this.level = this.choseLevel();
        if (this.level === "easy") {
            this.timeInterval = 1500;
        }
        if (this.level === "medium") {
            this.timeInterval = 1000;
        }
        if (this.level === "hard") {
            this.timeInterval = 500;
        }
        this.pointsUser = 0;
        this.pointsPc = 0;
        this.processTimer = null;
    }

    choseLevel() {
        let enterLevel;
        while (enterLevel !== 1 && enterLevel !== 2 && enterLevel !== 3) {
            enterLevel = +prompt("Let begin new game! Select the difficulty level: easy - 1, medium  - 2, hard - 3 ");
        }
        if (enterLevel === 1) return "easy";
        if (enterLevel === 2) return "medium";
        if (enterLevel === 3) return "hard";
    }

    playerAction() {
        grid.addEventListener('click', function (e) {
            if (e.target.style.backgroundImage === "url(\"./img/activeIcon.png\")") {
                const cell = e.target;
                cell.style.backgroundImage = "url(\"./img/catchIcon.png\")";
                clearTimeout(this.processTimer);
            }
        })
    }

    whoIsWinner() {
        if (this.pointsUser > this.pointsPc) {
            alert(`Congratulations! You won with the score ${this.pointsUser} : ${this.pointsPc}`);
        }
        if (this.pointsUser < this.pointsPc) {
            alert(`You lost with the score ${this.pointsUser} : ${this.pointsPc}`);

        }
        alert("Good luck in new game");
        location.reload();
    }

    startGame() {
        const goal = cell.activeCell();
        if (this.pointsUser >= arrCell.length / 2 || this.pointsPc >= arrCell.length / 2) {
            return this.whoIsWinner();
        }

        if (arrCell[goal].style.backgroundImage === "") {
            arrCell[goal].style.backgroundImage = "url(\"./img/activeIcon.png\")";
            arrNumber.slice(arrNumber.indexOf(goal), 1);
            this.playerAction();
            this.processTimer = setTimeout(() => {
                if (arrCell[goal].style.backgroundImage !== "url(\"./img/catchIcon.png\")") {
                    arrCell[goal].style.backgroundImage = "url(\"./img/loseIcon.png\")";
                    this.pointsPc++;
                } else if (arrCell[goal].style.backgroundImage === "url(\"./img/catchIcon.png\")") {
                    this.pointsUser++;
                }
                this.processTimer = null;

                this.startGame();
            }, this.timeInterval);

        }
    }
}

const newField = new Field();
newField.buildField(100);
const cell = new Cell();
const newGame = new Game();
newGame.startGame();

