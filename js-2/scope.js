let a = 1
const b = 10

function func(a) {
  if (true) {
    let b = 2
    console.log('within if block:', `a:${a}`, `b:${b}`) //'within if block: a:3 b:2'
  }
  console.log('within function block:', `a:${a}`, `b:${b}`) // 'within function block: a:3 b:10'
}

func(3)
console.log('In global scope:', `a:${a}`, `b:${b}`) // 'In gloabl scope: a:1 b:10 '

// var is function scoped
var a = 1
var b = 10

function func(a) {
  if (true) {
    var b = 2
    console.log('within if block:', `a:${a}`, `b:${b}`) // 'within if block: a:3 b:2'
  }
  console.log('within function block:', `a:${a}`, `b:${b}`) // 'within function block: a:3 b:2'
}

func(3)
console.log('In global scope:', `a:${a}`, `b:${b}`) // 'In global scope: a1: b:10'
