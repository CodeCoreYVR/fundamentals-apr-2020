// JS: Objects

// key/property - values
// keys are strings
// values can be any data-type
const myObj = {
  a: 5,
  b: 6,
  aProperty: 7,
}

const car = {
  doors: 5,
  colour: 'blue',
  // pre ES6:
  run: () => {
    console.log("running...")
  },
  // post ES6 shorthand
  openTrunk() {
    console.log('Trunk opened')
  }
}

// Using dot notation
car.colour // "blue"
car.run // gives us the definition of the method
car.run() // "running..."

// Using bracket notation
car["doors"] // 5
car["openTrunk"]() // "Trunk opened"

// Trying to access a property that doesn't exist gives us undefined
car.passengers // undefined

const person = {
  name: "Sam",
  age: 22,
  occupation: 'developer',
}

// Setting properties
person.occupation = 'JavaScript Expert'
person["skills"] = ['ruby', 'rails', 'javascript']

// Access keys and values in an object using for..in
for (let property in person) {
  console.log(`Person's ${property} is ${person[property]}`)
}

// Count characters in a string with an object
function countChars(string) {
  const output = {}

  for (let i = 0; i < string.length; i++) {
      if (output[string[i]]) {
          output[string[i]]++
      } else {
          output[string[i]] = 1
      }
  }

  return output
}

// Count words in a sentence
function wordLength (words) {
  let arr = words.split(' ')
  const output = {}
  for (let i = 0; i < arr.length; i++) {
      output[arr[i]] = arr[i].length
  }
  return output
}

// Shallow copy an object
const car2 = {...car}
const car3 = Object.assign({}, car)

// Delete a key/value pair by using the 'delete' keyword
delete car.colour
// Verify if the key exists in the object:
car.hasOwnProperty('colour') // false
car.hasOwnProperty('doors') // true

typeof [] // "object"
typeof {} // "object"
Array.isArray([]) // true
Array.isArray({}) // false

// Return an array of an object's keys or values
Object.keys(car)
Object.values(car)

// object keys have to be unique
const obj = {
  a: 1, 
  b: 2,
  a: 3,
}
obj // {a: 3, b: 2}
