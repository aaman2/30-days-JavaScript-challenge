
/* Activity 1: Arithmetic Operations 
•	Task 1: Write a program to add two numbers and log the result to the console.
•	Task 2: Write a program to subtract two numbers and log the result to the console.
•	Task 3: Write a program to multiply two numbers and log the result to the console.
•	Task 4: Write a program to divide two numbers and log the result to the console.
•	Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
*/

var a = 20;
var b = 4;

console.log("Add :",a+b);
console.log("Subtract :",a-b);
console.log("Multiply :",a*b);
console.log("Divide :",a/b);
console.log("Remainder :",b%a,"%");

/*Activity 2: Assignment Operators
•	Task 6: Use the + operator to add a number to a variable and log the result to the console.
•	Task 7: Use the operator to subtract a number from a variable and log the result to the console. */

let number1 = 10;
number1 = number1 + 5;
console.log("The result after adding 5 is:", number1);

let number2 = 20;
number2 = number2 - 7;
console.log("The result after subtracting 7 is:", number2);

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`);
} else {
    console.log(`${num1} is equal to ${num2}`);
}

// Task 9: Write a program to compare two numbers using >= and  <= and log the result to the console
let num3 = 15;
let num4 = 15;

if (num3 >= num4) {
    console.log(`${num3} is greater than or equal to ${num4}`);
} else {
    console.log(`${num3} is less than ${num4}`);
}

if (num3 <= num4) {
    console.log(`${num3} is less than or equal to ${num4}`);
} else {
    console.log(`${num3} is greater than ${num4}`);
}

// Task 10: Write a program to compare two numbers using ==  and === and log the result to the console.

let num5 = 10;
let num6 = '10';

if (num5 == num6) {
    console.log(`${num5} is equal to ${num6} using ==`);
} else {
    console.log(`${num5} is not equal to ${num6} using ==`);
}

if (num5 === num6) {
    console.log(`${num5} is equal to ${num6} using ===`);
} else {
    console.log(`${num5} is not equal to ${num6} using ===`);
}


/* Activity 4: Logical Operators
•	Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
•	Task 12: Write a program that uses || the operator to combine two conditions and log the result to the console.
•	Task 13: Write a program that uses the! Operator to negate a condition and log the result to the console. */


let condition1 = true;
let condition2 = false;
let result = condition1 || condition2;
let result1 = condition1 && condition2;
console.log("Result of condition1 || condition2:",result); 
console.log("Result of condition1 && condition2:",result1); 

let condition = true;
let result2 = !condition;
console.log("Result of !condition:", result2);

/*Activity 5: Ternary Operator
•	Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.*/

let number = 12;
// a ? b : c    evaluates to b if the value of a is true, and otherwise to c 
let result3 = (number <= 0) ? "Positive" : "Negative";

console.log(`The number ${number} is:`, result3);