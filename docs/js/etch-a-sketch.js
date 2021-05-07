
let gridContainer = document.querySelector('#grid-container');
generateGrid();

let gridSquares = gridContainer.querySelectorAll('.grid-square');
let gridSquaresArray = Array.from(gridSquares);
let resetButton = document.querySelector('#reset-grid-btn');

resetButton.addEventListener('click', () => {
    generateNewGrid();
});
resetButton.classList.add(':hover');
resetButton.style['border-color:hover'] = generateRandomRGB();
resetButton.style['color:hover'] = generateRandomRGB();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomRGB() {
    return `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
}

function generateGrid() {
    for (let i = 0; i <= 256; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style['background-color'] = generateRandomRGB();
        });
        gridContainer.appendChild(gridSquare);
    }
}

function generateNewGrid() {
    let size = window.prompt('Set a new grid size', 100);

    if (size > 100) {
        alert('100 is the limit.');
    }

    resetGrid();
    let area = size * size;

    for (let i = 0; i < size; i++) {
        gridContainer.style['grid-template-rows'] += " 1fr "
    }
    for (let i = 0; i < size; i++) {
        gridContainer.style['grid-template-columns'] += " 1fr ";
    }
    for (let i = 0; i < area; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style['background-color'] = generateRandomRGB();
        });
        gridContainer.appendChild(gridSquare);
    }
}

function resetGrid() {
    let gridSquaresArray = Array.from(gridSquares);
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridContainer.style['grid-template-columns'] = '';
    gridContainer.style['grid-template-rows'] = '';
}



