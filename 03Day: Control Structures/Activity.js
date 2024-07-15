/*Activity 1: If-Else Statements
•	Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 
•	Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
*/

let a =0
if (a>0) {
    console.log("positive");//  block of code to be executed if condition1 is true
  } else if (a==0) {
    console.log("Zero");
  } else {
    console.log("negative");    
}

function checkVotingEligibility(age) {
  if (age >= 18) {
      console.log("You are eligible to vote.");
  } else {
      console.log("You are not eligible to vote.");
  }
}

// Example usage:
const personAge = 20; // Replace with the desired age
checkVotingEligibility(personAge);




/*Activity 2: Nested If-Else Statements
•	Task 3: Write a program to find the largest of three numbers using nested if-else statements.*/

function findLargestNumber(a, b, c) {
  let largest;
  
  if (a >= b) {
      if (a >= c) {
          largest = a;
      } else {
          largest = c;
      }
  } else {
      if (b >= c) {
          largest = b;
      } else {
          largest = c;
      }
  }
  
  return largest;
}

// Example usage:
const num1 = 5;
const num2 = 10;
const num3 = 7;

const largestNumber = findLargestNumber(num1, num2, num3);
console.log("The largest number is: " + largestNumber);



/*Activity 3: Switch Case
•	Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 
•	Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.*/

/*Activity 4: Conditional (Ternary) Operator
•	Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.*/

/*Activity 5: Combining Conditions
•	Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.*/
