/*function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    var expression = document.getElementById("display").value;
    var result = eval(expression);   // beginner-friendly way
    document.getElementById("display").value = result;
}*/







// Variable to check if result is already calculated
var isCalculated = false;

function addToDisplay(value) {

    // If already calculated, do not allow adding more numbers
    if (isCalculated === true) {
        return;
    }

    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    isCalculated = false;   // Unlock calculator
}

function calculate() {

    var expression = document.getElementById("display").value;

    if (expression === "") {
        return;
    }

    var result = eval(expression);

    document.getElementById("display").value = result;

    isCalculated = true;   // Lock calculator
}