const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid-container');
container.appendChild(grid);

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
        box.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
        });
        grid.appendChild(box);
        box.setAttribute('id', x)
    }



}

function clearGrid() {

    const boxes = document.querySelectorAll('.grid-item');
    boxes.forEach(box => grid.removeChild(box));
    fillGrid();

}

