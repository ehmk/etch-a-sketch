
let gridContainer = document.querySelector('#grid-container');
generateGrid();

let gridSquares = gridContainer.querySelectorAll('.grid-square');
let gridSquaresArray = Array.from(gridSquares);
let resetButton = document.querySelector('#reset-grid-btn');

resetButton.addEventListener('click', () => {
    generateNewGrid();
});

function generateGrid() {
    for (let i = 0; i <= 256; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add('blue');
        });
        gridContainer.appendChild(gridSquare);
    }
}

function generateNewGrid() {
    let height = window.prompt('Generate a new canvas. Height: ', 100);
    let width = window.prompt('Width: ', 100);

    if (height > 100 || width > 100) {
        alert('100 is the limit.');
    }

    resetGrid();
    let area = height * width;

    for (let i = 0; i < height; i++) {
        gridContainer.style['grid-template-rows'] += " 1fr "
    }
    for (let i = 0; i < width; i++) {
        gridContainer.style['grid-template-columns'] += " 1fr ";
    }
    for (let i = 0; i < area; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add('blue');
        });
        gridContainer.appendChild(gridSquare);
    }
}

function resetGrid() {
    let gridSquaresArray = Array.from(gridSquares);
    for (let i = 0; i < gridSquaresArray.length; i++) {
        gridSquaresArray[i].classList.remove('blue');
    }
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridContainer.style['grid-template-columns'] = '';
    gridContainer.style['grid-template-rows'] = '';
}



