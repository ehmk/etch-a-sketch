let gridContainer = document.querySelector('#grid-container');

function generateGrid() {
    for (let i = 0; i <= 256; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.setAttribute('class', 'grid-square');
        gridContainer.appendChild(gridSquare);
        console.log(i);
    }
}

generateGrid();