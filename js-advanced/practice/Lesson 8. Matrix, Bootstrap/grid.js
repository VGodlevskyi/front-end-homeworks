function createGrid(size) {
    const grid = document.createElement('div');
    const matrix = [];

    let curPos = {
        y: null,
        x: null
    };
    const character = document.createElement('div');
    character.style = `
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: tomato;
        margin: 25px;
    `;

    for (let y = 0; y < size; y++) {
        const row = [];
        const rowEl = document.createElement('div');
        rowEl.style.display = 'flex';
        for (let x = 0; x < size; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.width = '100px';
            cell.style.height = '100px';
            cell.style.border = '1px solid black';

            cell.dataset.y = y;
            cell.dataset.x = x;

            row.push(cell);
            rowEl.appendChild(cell);
        }
        grid.appendChild(rowEl);
        matrix.push(row);
    }

    const shifts = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        // [-1, 1],
        // [-1, -1],
        // [1, 1],
        // [1, -1],
    ]
    let isStarted = false;
    grid.addEventListener('click', (e) => {
        const curCell = e.target.closest('.cell');
        if (curCell) {
            const {
                y,
                x
            } = curCell.dataset;

            if (isStarted) {
                shifts.forEach(([shiftY, shiftX]) => {

                    if (+curPos.y + shiftY == +y && +curPos.x + shiftX == +x) {
                        curCell.appendChild(character);
                        curPos = {
                            y,
                            x
                        };
                    };

                })


            } else {
                curCell.appendChild(character);
                curPos = {
                    y,
                    x
                };
                isStarted = true;
            }
        }
    })

    document.body.appendChild(grid);
};

// createGrid(5)

class Grid {
    constructor(size) {
        this.size = size;
        this.grid = Grid.createGrid(size);
        this.character = Grid.createCharacter();
        this.curY = null;
        this.curX = null;
        this.isStarted = false;
        this.score = 0;

        this.grid.addEventListener('click', Grid.handleCellClick.bind(this));
        document.addEventListener('keydown', Grid.handleKeyPress.bind(this));
        document.body.appendChild(this.grid);
    }

    reset() {
        this.character.remove();
        this.curY = null;
        this.curX = null;
        this.isStarted = false;
    }

    move(y, x) {
        if (!Grid.checkCoordinates(this.size, y, x)) return;
        if (this.getCell(y, x).dataset.visited) return;

        if (this.isStarted) {
            Grid.shifts.forEach(([shiftY, shiftX]) => {
                if (this.curY + shiftY == +y && this.curX + shiftX == +x) {
                    this.changePosition(y, x)
                };
            })
        } else {
            this.changePosition(y, x)
            this.isStarted = true;
        }
    }

    changePosition(y, x) {
        const prevCell = this.getCell(this.curY, this.curX);
        if (prevCell) {
            prevCell.dataset.visited = 'true';
        };

        const nextCell = this.getCell(y, x);
        if (nextCell.dataset.coin) {
            this.score++;
            delete nextCell.dataset.coin;
        }
        nextCell.appendChild(this.character)
        this.curY = +y;
        this.curX = +x;
    }

    getCell(y, x) {
        return this.grid.children[y] && this.grid.children[y].children[x];
    }

    static createGrid(size) {
        const grid = document.createElement('div');
        for (let y = 0; y < size; y++) {

            const rowEl = document.createElement('div');
            rowEl.style.display = 'flex';

            for (let x = 0; x < size; x++) {
                const cell = Grid.createCell(y, x);
                rowEl.appendChild(cell);
            }

            grid.appendChild(rowEl);
        }

        Grid.generateCoins(grid, size);
        return grid;
    }

    static createCell(y, x) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = '100px';
        cell.style.height = '100px';
        cell.style.border = '1px solid black';

        cell.dataset.y = y;
        cell.dataset.x = x;

        return cell;
    }

    static checkCoordinates(size, y, x) {
        return y >= 0 && y <= size - 1 && x >= 0 && x <= size - 1
    }

    static createCharacter() {
        const character = document.createElement('div');
        character.className = 'character';
        return character
    }

    static handleCellClick(e) {
        const curCell = e.target.closest('.cell');
        if (curCell) this.move(curCell.dataset.y, curCell.dataset.x);
    }

    static generateCoins(grid, count = 0) {
        let limit = count + 5000;

        while (count && limit) {
            const size = grid.children.length - 1;
            const y = randomInteger(0, size);
            const x = randomInteger(0, size);
            const cell = grid.children[y].children[x];

            if (!cell.dataset.coin) {
                cell.dataset.coin = 'true';
                count--;
            }
            limit--;
        }


        function randomInteger(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        }
    }

    static handleKeyPress(e) {
        const shift = Grid.keyDirections[e.code];
        if (shift) {
            const [y, x] = shift;
            this.move(this.curY - y, this.curX - x)
        }
    }

    static shifts = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ]

    static keyDirections = {
        'ArrowUp': Grid.shifts[0],
        'ArrowDown': Grid.shifts[1],
        'ArrowLeft': Grid.shifts[2],
        'ArrowRight': Grid.shifts[3],
    }
};

const grid = new Grid(5)