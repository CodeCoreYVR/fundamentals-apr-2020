/*
  Increment/decrement operators
  ++ --
  pre increment/decrement operators
  post increment/decrement operators
*/

let num = 2

console.log(`num is initialized with a value of: ${num}`)

console.log(`When using preincrement, the value gets increased by one before printing it to the console, which changes its value to: ${++num}`)

console.log("current value:", num)

console.log(`When using postincrement, the value gets increased by one, only after returning it. So it displays the current value of num:${num++}, before adding 1 to num`)

console.log("current value:", num)

let num2 = 10
num2 *= 2 // 20
num2 = num2 / 5 // 4
++num2 // 5
