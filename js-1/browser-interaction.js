// Browser dialog:
alert('message')
// displays a message and returns undefined

confirm('Do you want to proceed?')
// ask for confirmation and returns a boolean

prompt('what is your name?')
// ask for input
// returns a string of the input if OK is clicked
// returns null if cancelled

let name = prompt('what is your name?')
alert(`Hello ${name}`)
