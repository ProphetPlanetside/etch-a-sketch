// Function changes the color of the square to red when called.
function changeColor(square) {
    square.style.backgroundColor = 'red';
}

// n = number of rows/columns. i.e. For a 16x16 grid, n = 16.
function createSquare(n) {
    // Create a new element called "square".
    const square = document.createElement('square');
    // Add the "square" class to this new variable from the CSS.
    square.classList.add('square');
    
    // This is the calculation to find the flex-basis. Flex basis is the percentage of the row-space
    // that the square will take up.  i.e. if it equals 25%, then 4 squares will fit in a row.
    const flexBasis = 100/n;
    
    // Add the css style "flex" to the square. This was required before being able to do the next line of code.
    square.style.display = "flex";
    // Set the flex-basis value to be equal to the value we just found above from 100/n.
    square.style.cssText = `flex-basis: ${flexBasis}%;`

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

// n = number of rows/columns. i.e. For a 16x16 grid, n = 16.
function etchASketch(n) {
    // Match a new variable "grid" to the div with ID 'grid' from the HTML file.
    const grid = document.querySelector('#grid');

    // Clear the grid.
    removeAllChildNodes(grid);

    // Creates squares equal to n squared
    for (i = 0; i < n*n; i++) {
        createSquare(n);
    }
}

// This function removes all child nodes from an element (removes all squares on the grid in this case).
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Makes sure the new grid meets requirements before creation.
function newGridPrompt() {
    let answer = 101;
    while (answer > 100) {
        answer = prompt("How many squares per side would you like? (Max: 100)");
        // If the answer is not a number.
        if(isNaN(answer)) {
            alert("That is not a number; please enter a number.");
            // Makes sure the while loop will continue.
            answer = 101;
        }
        // If the answer is less than 1.
        else if(answer < 1) {
            alert("Please enter a number greater than 0, but less than 101.");
            answer = 101;
        }
        // If the answer has a decimal.
        else if(answer % 1 != 0) {
            alert("No decimal values are allowed.");
            answer = 101;
        }
    }
    // Create a new grid.
    etchASketch(answer);
}

// Create the initial 16x16 grid.
etchASketch(16);

// Create a variable to match to the button in the HTML.
const button = document.querySelector('#topButton');
// When the button is clicked, prompt the user for a number value, then create a new grid with that value of
// squares per row.
button.addEventListener("click", function() {newGridPrompt()});
