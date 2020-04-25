// comparsion operators
// < > <= >=

5 > 4 // true
5 >= 5 // true
5 > 5 // false

// Equailty/Inequality operators
// Double equals (equality) will compare the two values
// It has a loose idea equality
// because it tries to coerce both sides to similar types
// == !=

2 == 2 // true
2 != 2 // false
2 == '2' // true (because of type coercion)
2 != '2' // false (because of type coercion)

// Strict Equality/Inequality Operator
// triple equals will compare the value and its data type
// because it won't try to coerce different data types

2 === 2 // true
2 !== 2 // false
2 === '2' // false 
2 !== '2' // true 

// Logical operators
// && (and)
// || (or)

// with the && (AND) operator both operands must be true to return true
true && true // true
true && false // false
false && true // false
false && false // false

// with the || (OR) operator at least one operand must be true to return true
true || true // true
false || true // true
true || false // true
false || false // false

// Falsy values
0
-0
null
undefined
''
NaN

// The logical operators work in a short circuit way
// &&:
// if first operand is truthy, it will return the second operand no matter whether it's truthy or falsy
// if first operand falsy, it will return that falsy value and ignore the 2nd operand
"truthy" && '' // ''
'' && "truthy" // ''
"truthy" && 'test' // 'test'

// ||:
// if first operand is truthy, it returns that value and ignores the 2nd value
// if first operand falsy, it will return the second operand no matter whether it's truthy or falsy
"truthy" || '' // "truthy"
'' || "truthy" // "truthy"
"truthy" || 'test' // "truthy"
'' || 0 // 0
