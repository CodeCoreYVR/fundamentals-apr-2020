// JavaScript Review

// JavaScript Variables
// We have three keywords in javascript to declare variables
// const => declares a constant variable which can't be changed and should be assigned right away, use it as much as possible
// let => declares a variable use when you need to change the variable value throughtout your code
// var => the old way avoid using it

// Variables can be of any types (strings, numbers, objects, arrays, functions)

const myStringVar = "Hello world";

const myNumberVar1 = 10;
const myNumberVar2 = 2.5;

const myObjectVar = {
  a: 10,
  b: 20,
  c: 4,
};

const myAddFunctionVar = function (x, y) {
  return x + y;
};

myAddFunctionVar(myNumberVar1, myNumberVar2);

// Arrays

// Arrays are a type of data structure that we can use to
// store data of any above types that we mentioned for variables

// We can access array elements by their indexes using bracket notation
// for example:

const myUtilArray = [
  1,
  { a: 1, b: 2, c: 3 },
  "Hello there",
  function multiply(x, y) {
    return x * y;
  },
  ["inner array", 5, 6, 7],
];

// myUtilArray[1]; // { a: 1, b: 2, c: 3 }

// myUtilArray[3](4, 4); // 16

// Object

// Objects are another powerful data structure type that can be
// used for storing data. They can store any kind of data types
// that we mentioned above for variables. The functions inside objects
// are called methods

// Objects can access data using dot-notation(.) or bracket-notation([])

const myUtilObject = {
  a: 5,
  greeting: "Hello there",
  square: function (n) {
    return n * n;
  },
  nestedObject: { list: [1, 2, 3, 4, 5], color: "green" },
};

myUtilObject.a; // 5
myUtilObject["a"]; // 5

myUtilObject.square(5); // 25

// Functions
// Functions declared using function keyword or we have arrow function in ES6
// functions are used to separate different parts of your program that are doing
// different tasks and group similar tasks together to clean your code and avoid
// repitition

// example:
const fourMathOperations = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} / ${y} = ${x / y}`);
  console.log(`${x} * ${y} = ${x * y}`);
};

// fourMathOperations(12, 8);

// Higher order functions:
// A function that either takes in another function (callback)
// as a parameter or it returns a function.

// In JS, functions are first-class, they can be returned
// from other functions as values, and also passed around

const runFunc = function (func, arg) {
  func(arg);
};

function log(msg) {
  console.log(msg);
}

runFunc(log, "Hello there");

// const inc = (num) => console.log(num + 1);
// runFunc(inc, 8);
// the above two lines are equivalent to the below line
runFunc((num) => console.log(num + 1), 8);
