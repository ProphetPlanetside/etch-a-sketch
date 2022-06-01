const grid = document.querySelector('#grid');

let n = 2;

// the backtick ` let's me use a variable in my JS script for this line below.
grid.style.cssText = `grid-template-columns: repeat(${n}, 1fr);`

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('test');
    square.textContent= "Test";

    grid.appendChild(square);
}

for (i = 0; i < 5; i++) {
    createSquare();
}