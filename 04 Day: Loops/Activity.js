/*Activity 1: For Loop
•	Task 1: Write a program to print numbers from 1 to 10 using a for loop.
•	Task 2: Write a program to print the multiplication table of 5 using a for loop.*/

console.log('numbers from 1 to 10 using a for loop');
for (a=1; a<=10; a++) {
 console.log(a);
}

console.log('multiplication table of 5 ');
for (a=1; a<=10; a++) {
  console.log(` 5 x  ${a} = ${a*5}`);
}

/*Activity 2: While Loop
•	Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a white loop.
•	Task 4: Write a program to print numbers from 10 to 1 using a while loop.
*/
 // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55.

 // Initialize the variables
let sum = 0;
let num = 1;

// While loop to calculate the sum of numbers from 1 to 10
while (num <= 10) {
    sum += num;
    num += 1;
}


// Print the result
console.log("The sum of numbers from 1 to 10 is: " + sum);

var  a =0;
var b =0;
while (a<=10) { 
  b+=a;
  console.log(b);
  a++
}

num=10;
console.log('print numbers from 10 to 1 ');
while(num>0){
console.log(num);
num--
} 

/*Activity 3: Do... While Loop
•	Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
•	Task 6: Write a program to calculate the factorial of a number using a do...while loop.*/
console.log("print numbers from 1 to 5");
  var Nam=1;
do {
  console.log(Nam);
  ++Nam  
} while (Nam<=5);


// factorial of a number  3! = 3 × 2 × 1 = 6
console.log("factorial of a number");

let factorialnumber = 3; 
let factorial = 1;
let i = factorialnumber;
do {
    factorial *= i;
    i -= 1;
} while (i > 0);
console.log("The factorial of " + factorialnumber + " is: " + factorial);

/*Activity 4: Nested Loops
•	Task 7: Write a program to print a pattern using nested for loops*/


let rows = 5;

// Outer loop for each row
for (let i = 1; i <= rows; i++) {
    // Initialize an empty string for each row
    let pattern = '';
    // Inner loop to concatenate stars
    for (let j = 0; j < i; j++) {
        pattern += '*';
    }
    // Print the pattern for the current row
    console.log(pattern);
}

/*Activity 5: Loop Control Statements
•	Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
•	Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
*/
// Print numbers from 1 to 10, skipping 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
      continue;
  }
  console.log(i);
}
// Print numbers from 1 to 10, stopping at 7
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
      break;
  }
  console.log(i);
}

