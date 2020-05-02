// Declare a variable:
// {Keyword} {variableName}
let aVariable // undefined

// Declare and initalize:
// {Keyword} {variableName} = {value}
let anotherVariable = 123

// Different between const and let
let letVariable = 0
letVariable = 1
letVariable++ // 2

const constVariable = 0
constVariable++ // Uncaught TypeError: Assignment to constant variable.

// If you declare a variable with const, you have to initialize it at the same time
const name // Uncaught SyntaxError: Missing initializer in const declaration

// How to define a string:
"Double quotes"
'Single quotes'
`Backticks`

// No difference between "" and '', other than 
// escaping the same quote inside the string with '\'
'You\'re awesome'

// Using backticks, we can interpolate
`5 + 5 = ${5 + 5}` // "5 + 5 = 10"
// Backticks also allow for multiline strings:
`
  This is 
  on a new
  line
`

// The difference between == and === 
// JS will try to coerce the operands into the same data type before comparing  
2 == '2' // true
'2' == '2' // true

// using ===, JS will not try to coerce
2 === '2' // false
