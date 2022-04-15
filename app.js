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

let sumNumbers = sum(1,2);
console.log({sumNumbers});

let sub = subtract(5,2);
console.log({sub});

let product = multiply(3,2);
console.log({product});

let division = divide(3,2);
console.log({division});

