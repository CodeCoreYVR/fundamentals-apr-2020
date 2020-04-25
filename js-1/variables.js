// A variable is a container that holds a value
// It has accessibility, name, and a value

// the accessibility is set one keyword
// const, let, var

// Syntax is as follows:
// Here we declare and initialize a variable
// {keyword} {variableName} = {value}

// When declaring a variable without a value,
// the space in memory gets assigned but its value is undefined
let helloWorld
helloWorld // undefined

// assign it a value:
helloWorld = "a value"

// Declare a variable that can't be reassigned/rebinded:
const num = 2
num = 3 // TypeError

// When declaring const variables, you must initialize it at the same time
const num2 // SyntaxError

// Declare a variable that can be reassigned:
var name = "Joe"
let isTrue = true

// set a value to null
let empty = null

// Conventions:
// camelCase (this is the convention in JS)
const camelCase = 'value'
// snake_case
const snake_case = 'value'

// Rules for variale names
// * cannot contain spaces
// * must start with a letter, _ or $
// * may contain digits if it's not the starting character
// * are case-sensitive
// * can't be a reserved word in JS
