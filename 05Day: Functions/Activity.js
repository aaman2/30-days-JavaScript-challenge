/*Tasks/Activities:
Activity 1: Function Declaration
•	Task 1: Write a function to check if a number is even or odd and log the result to the console.
•	Task 2: Write a function to calculate the square of a number and return the result.  x² = x * x  */
//  num % 2 == 1  Odd 
// num % 2 == 0 Even 

function Checkoddeven(num)
{

    if (num % 2 == 1){
        console.log(`${num} is ODD`);
    }
    else 
        console.log(`${num} is Even`);
}

Checkoddeven(3)

function squareFun(num){
        return  console.log(num * num); 
} 

squareFun(6)



/*Activity 2: Function Expression
•	Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
•	Task 4: Write a function expression to concatenate two strings and return the result.*/

function bignum(a,b){
    if (a>=b) {
        console.log(`1st number ${a} is big`);
    } else {
        console.log(`2nd Number ${b} is Big `);
    }
}

bignum(181,172)

/*Activity 3: Arrow Functions
•	Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
•	Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.*/

/*Activity 4: Function Parameters and Default Values
•	Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
•	Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.*/

/*Activity 5: Higher-Order Functions
•	Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
•	Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result*/