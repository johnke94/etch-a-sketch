const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid-container');
container.appendChild(grid);

var isRainbow = false;

function fillGrid() {
        
    var rows = prompt("How many rows?");
    var numRows = "";

    for (let i = 0; i < rows; i++) {
        numRows += ' auto';
}

    grid.style.cssText = 'grid-template-columns: ' + numRows;


    for (let x = 1; x <= rows*rows; x++) {
        const box = document.createElement('div');
        box.classList.add('grid-item');
        box.addEventListener('mouseover', colors);
        grid.appendChild(box);
        box.setAttribute('id', x)
    }
}

function colors(){

    if (isRainbow){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    } else this.style.backgroundColor = 'black';

}

function clearGrid() {

    const boxes = document.querySelectorAll('.grid-item');
    boxes.forEach(box => grid.removeChild(box));
    fillGrid();

}

function rainbow() {
    isRainbow = !isRainbow;
}

