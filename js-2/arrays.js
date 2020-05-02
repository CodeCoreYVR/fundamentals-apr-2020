// JS Arrays:
// Arrays are ordered collections of data

// Use square brackets [] to define an array
// Each element is separated by a comma
[1, 'a string', false, [3, 4]]

// You can also nest arrays
[1, [2, [3, 4]]]

// Ways to work with arrays:
let arr = [1, 2, 3, 4, 5]
arr.length // 5
arr[0] // 1

// Append elements:
// .push() appends values/elements to the end of the array
// returns the new array length
arr.push(6, 7) // returns 7 (the array length)
arr // [1, 2, 3, 4, 5, 6, 7]

// Remove last element:
// .pop() removes the last element
// returns that element
arr.pop() // returns 7 (the element that was removed)
arr // [1, 2, 3, 4, 5, 6]

// Removes first element:
// .shift() removes the first element
// returns that element
arr.shift() // returns 1 (the element that was removed)
arr // [2, 3, 4, 5, 6]

// Add to the beginning of the array:
// .unshift() adds elements to the beginning
// returns the new array length
arr.unshift(0, 1) // returns 7 (the new array length)
arr // [0, 1, 2, 3, 4, 5, 6]

// .slice() returns a new array as a portion of the array that it is called on
// .slice(index1, index2)
// index1: the beginning index of the new array (inclusive)
// index2: the ending index of the new array (exclusive)
arr.slice(1, 3) // [1, 2]

// slice() does not mutate the array that it's called on
arr // [1, 2, 3, 4, 5, 6]

// Traditional looping over arrays:
const letters = ['a', 'b', 'c', 'd']

for (let i = 0; i < letters.length; i++) {
  console.log(letters[i])
}

// Using for..of loop
for (let letter of letters) {
  console.log(letter)
}

// Sum an array using a loop
const numbers = [0, 5, 6, -12]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

// Log to the console a message of word length
const words = ["apple", "dog", "computer", "cup"]
for (let word of words) {
  console.log(`${word} has ${word.length} characters`)
}

// .join() (array method) joins together all elements in an array,
// separated by the argument that you pass in 
// and returns a string
// it does not mutate the array that it was called on
words.join(' | ') // "apple | dog | computer | cup"

// .split() (string method) returns an array of strings
// split by the argument string that you pass in
"split can only be called on strings".split(' ')
// ["split", "can", "only", "be", "called", "on", "strings"]

// Get the count of words in a sentence 
let countWords = prompt('Enter a sentence').split(' ').length
alert(`There are ${countWords} words in that sentence`)

// Make a string containing all the numbers from 0-99 using join()
let stringArr = [];
for (let i = 0; i <= 99; i++) {
	stringArr.push(i)
}
stringArr.join('')
