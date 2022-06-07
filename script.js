const grid = document.querySelector('#grid');
// This piece of code works as a 'hover' eventListener, as it kicks off the event when you 'mouse over' the element.
// grid.addEventListener("mouseover", function() {message()});

// Function changes the color of the square to red when called.
function changeColor(square) {
    // square.style.cssText = "background-color: red;"
    square.style.backgroundColor = 'red';
}

// n = number of rows/columns. For a 16x16 grid, n=16.
let n = 10;

function createSquare() {
    const square = document.createElement('square');
    square.classList.add('square');
    
    // This is the calculation to find the flex-basis, it's not applying to the css.
    const flexBasis = 100/n;
    
    square.style.flexBasis = '10%';
    //square.style.cssText = `flex-basis: ${flexBasis}%;`

    // Height calculation below is wrong. It works when n=10 but not for other numbers.
    // Height of the grid must be 800, so the combined height of all squares must equal 800.
    // So this value should equal 800 / n.
    const height = 800 / n;
    //square.style.cssText = `height: 80px;`
    //square.style.cssText = `height: ${height}px;`

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
