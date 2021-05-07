
let gridContainer = document.querySelector('#grid-container');
let gridSquares = gridContainer.querySelectorAll('.grid-square');
let slider = document.querySelector('#slider');
let sliderValue = document.querySelector('#slider-value');
let resetButton = document.querySelector('#reset-grid-btn');

slider.input = updateSlider(slider.value);
slider.addEventListener('input', () => {
    updateSlider(slider.value);
});

resetButton.addEventListener('click', () => {
    generateGrid(slider.value);
});

function updateSlider(value) {
    sliderValue.textContent = `${value}x${value}`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomRGB() {
    return `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
}

function generateGrid(size) {
    resetGrid();
    let area = size * size;
    for (let i = 0; i < size; i++) {
        gridContainer.style['grid-template-rows'] += " 1fr "
    }
    for (let i = 0; i < size; i++) {
        gridContainer.style['grid-template-columns'] += " 1fr ";
    }
    for (let i = 0; i <= area; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style['background-color'] = generateRandomRGB();
        });
        gridContainer.appendChild(gridSquare);
    }
}

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridContainer.style['grid-template-columns'] = '';
    gridContainer.style['grid-template-rows'] = '';
}

generateGrid(slider.value);



