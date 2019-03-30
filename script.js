const container = document.querySelector('.contain');
const newSketchBtn = document.querySelector('#new-sketch');
newSketchBtn.addEventListener('click', function() {
    let rows = prompt("How many rows/columns would you like to have in your new sketch? (max 80)");
    deleteGrids();
    if (rows > 80) rows = 80;
    createGrids(rows);
    blackGrid();
});
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraseBtn = document.querySelector('#erase');
blackBtn.addEventListener('click', blackGrid);
rainbowBtn.addEventListener('click', colorGrid);
eraseBtn.addEventListener('click', eraser);
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearAll);

// Creates grids in num_rows * num_rows fashion
function createGrids(num_rows) {
    for (let i = 0; i < num_rows ** 2; i++) {
        let grid = document.createElement('div');
        grid.setAttribute('class', 'gr');
        container.appendChild(grid);
    }
    container.setAttribute('style', `grid: repeat(${num_rows}, auto) / repeat(${num_rows}, auto)`);
}

// Deletes all grids
function deleteGrids() {
    let grids = document.querySelectorAll('.gr');
    for (let i = 0; i < grids.length; i++) {
        let grid = grids[i];
        container.removeChild(grid);
    }
}

// On mouse over, change colour of grid to black
function blackGrid() {
    let grids = document.querySelectorAll('.gr');
    for (let i = 0; i < grids.length; i++) {
        let grid = grids[i];
        grid.addEventListener('mouseover', function () {
            grid.setAttribute('style', 'background-color:black;');
        });
    }
}

// On mouse over, change colour of grid to randomly generated RGB
function colorGrid() {
    let grids = document.querySelectorAll('.gr');
    for (let i = 0; i < grids.length; i++) {
        let grid = grids[i];
        let colour = () => { // function for generating random colour
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            return (`rgb( ${red}, ${green}, ${blue});`);
        }
        grid.addEventListener('mouseover', function () {
            grid.setAttribute('style', `background-color:${colour()}`);
        });
    }
}

// On mouse over, change colour of grid to white
function eraser() {
    let grids = document.querySelectorAll('.gr');
    for (let i = 0; i < grids.length; i++) {
        let grid = grids[i];
        grid.addEventListener('mouseover', function () {
            grid.setAttribute('style', 'background-color:white;');
        });
    }
}

// Clears the whole screen
function clearAll() {
    let grids = document.querySelectorAll('.gr');
    for (let i = 0; i < grids.length; i++) {
        let grid = grids[i];
        grid.setAttribute('style', 'background-color:white;');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createGrids(10); // 25 rows
    blackGrid();
});