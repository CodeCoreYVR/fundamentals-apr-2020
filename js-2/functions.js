// JS Functions:
// A container for a piece of code that can be executed whenever
// The argurments are the values that are passed to the function when called
// The parameters are the values within the function's code

// Function syntax:
// Function declaraction/statement:
function functionName(param1, param2) {
  // code body of the function
  return // expression
}

// Function expression:
// A function without a name is called an anonmyous function
const functionExpression = function(param1, param2) {
  // code 
  return // expression
}

// Arrow function (ES6+)
const arrow = (param1, param2) => {
  // code 
  return // expression
}

// Invoke/call a function with ()
arrow // returns function definition
arrow(1, 2) // returns expression after return statement

// save a returned value to a variable
let a = arrow(1, 2)

// If you don't have a return statement, the function will return undefined when called
function returnUndefined(param1, param2) {
  alert('this function does something')
  // this will return undefined
}
