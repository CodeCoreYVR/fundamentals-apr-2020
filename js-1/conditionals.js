// if/else statement

// The syntax for an if statement:

// Can be stand-alone
// if ( expression / condition ) {
  // code block that will execute only if the condition is true
// }

// You can write it on one line if there's only one line of code in the code block
// if ( expression / condition ) // single line of code

// With an else clause:
// if ( expression / condition ) {
  // code block that will execute only if the condition is true
// } else {
  // code will run if condition is false
// }

// Whenever you have an else clause, a block of code will always run
// No more than one code block will run per if statement
// With an else if clause
// if ( expression / condition ) {
  // code block that will execute only if the condition is true
// } else if ( expression / condition ) {
  // code will run if the else if condition is true
  // but will not run if the first if (condition) was true
// } else {
  // code will run if all previous if and else if conditions were false
// }

let year = parseInt(prompt("What year is your car?"))

if (year < 2000) {
    console.log('Your car is very old')
} else if (year < 2015) {
    console.log('Your car is old')
} else if (year < 2020) {
    console.log('Your car is new')
} else {
    console.log('Your car is future')
}
