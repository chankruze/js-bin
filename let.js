/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 21 2022 20:57:07 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

/**
 * Scope
 */

// block scoped

let greeting = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}

console.log(hello); // hello is not defined

// let can be updated but not re-declared. (safe / fixes var issue)

// let greeting = "say Hi"; // error: Identifier 'greeting' has already been declared

/**
 * Hoisting
 */

// Just like  var, let declarations are hoisted to the top.
// Unlike var which is initialized as undefined, the let keyword is not initialized.
// So if you try to use a let variable before declaration, you'll get a Reference Error.
