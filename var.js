/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 21 2022 17:47:33 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

/**
 * Scope
 */

// The scope of var is
// 1. global scope (window) when declared outside of any function
// 2. function scope when declared inside a function

var greetMsg = "Hello"; // global scope

function greeter() {
  var greetMsg = "Hi"; // local scope
  var hello = "Hello"; // local scope
  console.log(greetMsg, hello);
}

// console.log(hello); // hello not defined
greeter();

function greet() {
  console.log(greetMsg); // no local scope hence use global scope
}

greet();

// var variables can be re-declared and updated
var greetMsg = "Welcome!";

/**
 * Hoisting
 */

// Hoisting is a JavaScript mechanism where variables and function declarations
// are moved to the top of their scope before code execution.
// This is because, the variable and function declarations are stored in memory
// before the code is executed.

// var variables are hoisted to the top of their scope and initialized with a value of undefined.
console.log(greeter);
var greeter = "say hello";
// it is interpreted as below:
var greeter;
console.log(greeter); // undefined
greeter = "say hello";

/**
 * Problem
 */

// var variables can be re-declared and updated within the same scope and won't get an error.

var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter); // "say Hello instead"
