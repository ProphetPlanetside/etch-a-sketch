const grid = document.querySelector('#grid');
// This piece of code works as a 'hover' eventListener, as it kicks off the event when you 'mouse over' the element.
// grid.addEventListener("mouseover", function() {message()});

function changeColor(square) {
    // alert("Hello");
    square.style.cssText = "background-color: red;"
}

let n = 10;

// the backtick ` let's me use a variable in my JS script for this line below.
grid.style.cssText = `grid-template-columns: repeat(${n}, 1fr);`

function createSquare() {
    const square = document.createElement('square');
    square.classList.add('square');
    
    // This is the calculation to find the flex-basis, maybe I should use a different
    // name other than "width" here though.
    const width = 100/n;
    square.style.cssText = `flex-basis: ${width}%;`
    // Height calculation below is wrong. It works when n=10 but not for other numbers.
    const height = n*80/10;
    square.style.cssText = `height: ${height}px;`

    grid.appendChild(square);
    square.addEventListener("mouseover", function() {changeColor(square)});
 }

// Creates squares equal to n squared
for (i = 0; i < n*n; i++) {
    createSquare();
}

// grid.querySelectorAll(':scope > square').addEventListener("mouseover", function() {message()});

//const squares = grid.querySelectorAll(':scope > square');

// squares.addEventListener("mouseover", function() {message()});
