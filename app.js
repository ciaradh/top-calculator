let previousNumber = '';
let currentNumber = '';
let operatorClicked = undefined;
// let firstNumber = '';
// let secondNumber = '';
// let currentNumber = '';
// let resetDisplay = false;

/**
 * FUNCTIONS
 */

function buttonClick(button) {

    switch(button.value) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            console.log('number');
            appendNumber(button.innerHTML);
            updateDisplay();
            
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            console.log('expression');

            /**
             * Don't do anything if user clicks on operator and no operand has been selected yet
             */
            if(currentNumber == '') { return; }
            /**
             * Id I have something in the previous, it means I need to calculate the result before doing another operation
             */
            if(previousNumber != '') {
                compute();
            }
            operatorClicked = button.innerHTML;
            previousNumber = currentNumber;
            currentNumber = '';
            updateDisplay();

            break;
        case '=':
            compute();
            updateDisplay();
            break;
        case 'clear':
            console.log('clear');
            previousNumber = '';
            currentNumber = '';
            operatorClicked = undefined;
            updateDisplay();
            break;
        case 'back':
            deleteLast();
            updateDisplay();
            break;
    }
}

function deleteLast() {
    currentNumber = currentNumber.toString().slice(0, -1); //everything but the last element
}

function appendNumber(number) {
    if(number === '.' && currentNumber.toString().includes('.')) {return;}
    currentNumber += number;
}

function compute() {
    if(isNaN(previousNumber) || isNaN(currentNumber)) {return}

    let result = '';
    let prevNum = parseFloat(previousNumber);
    let nextNum = parseFloat(currentNumber);

    result = +operate(prevNum, nextNum, operatorClicked);

    currentNumber = result.toString();
    //clear
    operatorClicked = undefined;
    previousNumber = '';
}

/**
 * Update the value to be shown in the calculator display
 */
function updateDisplay() {
    //get display div
    let displayCurrent = document.getElementsByClassName('Display__current');
    let displayPrevious = document.getElementsByClassName('Display__previous');
    displayCurrent[0].innerHTML = currentNumber;
    if(operatorClicked != null) {
        displayPrevious[0].innerHTML = `${previousNumber} ${operatorClicked}`;
    } else {
        displayPrevious[0].innerHTML = previousNumber;
    }
}

/**
 * Sum function to return the sum of two numbers
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @returns the sum of two numbers
 */
function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

/**
 * Subtraction function to return the subtraction of two numbers
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @returns the subtraction of two numbers
 */
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

/**
 * Multiplication of two numbers
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @returns the product of two numbers
 */
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

/**
 * Division of two numbers
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @returns the division of two numbers
 */
 function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

/**
 * Calls one of the 4 functions on the two numbers
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @param {string} operator 
 */
function operate(firstNumber, secondNumber, operator) {
    switch(operator) {
        case '+':
            return sum(firstNumber, secondNumber).toFixed(4);
        case '-':
            return subtract(firstNumber, secondNumber).toFixed(4);
        case 'x':
            return multiply(firstNumber, secondNumber).toFixed(4);
        case '/':
            return divide(firstNumber, secondNumber).toFixed(4);
    }
}



