// Primitive Data Types
// Number
// String
// Boolean
// null
// undefined
// bigint
// symbol

// Examples of numbers
5
-5
-5.8762123
9.10
Infinity
-Infinity
NaN

// Strings
"This uses double quotes"
'This uses single\' quotes'
`This uses backticks`

// newline
'You are a \n string'
// 'You are a 
// string'

"one" + "two" // "onetwo"
'4' + 5 // '45'
5 + '4' // '54'

// We can interpolate with backticks
`There are ${3 + 4} students in the room`

// Only backticks can be used for multiline strings
`
  This is a
  multiline
  string
`

// Get the length of a string
"abc".length // 3

// We can access characters in a string with the bracket notation
"abc"[2] // "c"

// We cannot mutate a string with bracket notation
let s = 'bobbi'
s[4] = 'y'
s // 'bobbi'

// parse a string into a number
parseInt("123abc", 10) // 123
parseInt("123.45321", 10) // 123
parseFloat("123.45321", 10) // 123.45321

// Remove beginning and trailing spaces
"       Hello World            ".trim() // "Hello World"

// Booleans
true
false
