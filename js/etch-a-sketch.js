let gridContainer = document.querySelector('#grid-container');
let gridSquares = document.querySelectorAll('.grid-square');

function generateGrid() {
    for (let i = 0; i <= 256; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.setAttribute('class', 'grid-square');
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add('blue');
        });
        gridContainer.appendChild(gridSquare);
    }
}

console.log(gridSquares);

generateGrid();