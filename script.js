const grid = document.querySelector('#grid');

// Function changes the color of the square to red when called.
function changeColor(square) {
    // square.style.cssText = "background-color: red;"
    square.style.backgroundColor = 'red';
}

// n = number of rows/columns. For a 16x16 grid, n=16.
let n = 4;

function createSquare() {
    const square = document.createElement('square');
    square.classList.add('square');
    
    // This is the calculation to find the flex-basis, it's not applying to the css.
    const flexBasis = 100/n;
    
    square.style.display = "flex";
    //square.style.flexBasis = '10%';
    square.style.cssText = `flex-basis: ${flexBasis}%;`
    // square.style.height = "80px";

    // Height calculation below works. Total height / num of squares equals individual square height.
    const heightValue = 800 / n;
    // Make the css height of the square equal to the calculation in the line above.
    square.style.height = `${heightValue}px`;

    // Append the square (child) to the grid.
    grid.appendChild(square);
    // This piece of code works as a 'hover' eventListener, as it kicks off the event when you
    // 'mouse over' the element.
    square.addEventListener("mouseover", function() {changeColor(square)});
 }

// Creates squares equal to n squared
for (i = 0; i < n*n; i++) {
    createSquare();
}

