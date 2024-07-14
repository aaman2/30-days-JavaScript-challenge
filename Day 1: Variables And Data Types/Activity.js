/*
Activity 1: Variable Declaration
• Task 1: Declare a variable using var, assign it a number, and log the value to the console. 
• Task 2: Declare a variable using let, assign it a string, and log the value to the console.
*/
var numVar = 42;
console.log(numVar);

let word="hello world is String";
console.log(word);


/*  Activity 2: Constant Declaration */

const fix="Value Fixed In Const";
console.log(fix);

/*• Task 3: Declare a variable using const, assign it a boolean value, 
    and log the value to the console.*/
    const ConstVar=true;
    console.log(ConstVar);


/*Activity 3: Data Types

Task 4: Create variables of different data types (number, string, boolean, object, array) and 
log each variable's type using the typoof operator.   */


let num = 215;
let str = "Sidhit";
let bool = false;
let obj = { name: "Sidhit", age: 24 ,contactNo: 7988074141 };
let arr = [1, 2, 3, 4, 5];

console.log( typeof num , num);
console.log(typeof str, str);
console.log(typeof bool, bool);
console.log(typeof obj , obj );
console.log( typeof arr , arr );

/*Activity 4: Reassigning variables
Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console. */

// Task 5
let reassignVar = 23;
console.log("Task 5 - Initial reassignVar:", reassignVar);

reassignVar = "New Value";
console.log("Task 5 - New reassignVar:", reassignVar);
