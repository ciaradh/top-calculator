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
            return sum(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    }
}



