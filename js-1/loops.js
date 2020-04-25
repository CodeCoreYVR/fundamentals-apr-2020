// while loop

// Initialize value e.g. let i = 1
// while ( condition/expression ) {
  // code will run while the codition is true

  // after the iteration we should increment the initializer
  // e.g. i++
// }

// for loop
// for ( initializer ; expression/condition ; afterthought/iterator) {
  // code of that runs while the condition is true
// }

// Log the numbers from 1 to 100 to the console:
let i = 1
while ( i <= 100 ) {
    console.log(i)
    i++
}

// Log even numbers from 0 to 100 to the console:
let i = 0
while ( i <= 100 ) {
    console.log(i)
    i += 2 
} 

// the above while loop behaves like the following:
// for the while loop, i is in the global scope, 
// while in the for loop, i is scoped to the iteration
for (let i = 0; i <= 100; i += 2) {
  console.log(i)
}

// If there is only one line of code in the for loop,
// you can write it without braces:
for (let i = 0; i <= 100; i += 2) console.log(i)

// The break statement breaks out of the entire loop
// and continues on with the program
let result = 0
for (let i = 5; i < 10; i++) {
  result += i 
  if ( i % 3 === 0 ) break
}

// continue terminates the current iteration and moves to the next iteration
let result = 0
for (let i = 5; i < 10; i++) {
  if ( i % 3 === 0 ) continue
  result += i 
}

// A do while loop will run once before checking the condition
do {
  console.log('this will run')
} while (false)
