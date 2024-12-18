// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate and display the result
function calculateResult() {
    try {
        let expression = document.getElementById('display').value;

        // Handle square root
        expression = expression.replace(/sqrt\(([^)]+)\)/g, function (_, inner) {
            return Math.sqrt(eval(inner));
        });

        // Evaluate the expression
        document.getElementById('display').value= eval(expression);
    } catch (error) {
        alert('Invalid operation');
        clearDisplay();
    }
}
