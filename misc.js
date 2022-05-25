/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 21 2022 21:27:04 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const b = { a: 1 };
const c = 10;
b.a = 5;

delete b;
delete c;

console.log(b); // { a: 1 }
console.log(c); // 10

// The JavaScript delete operator removes a property from an object.
// if no more references to the same property are held, it is eventually released automatically.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

delete b.a;
console.log(b); // {}

// falsy values
// 1. 0
// 2. ""
// 3. null
// 4. false
// 5. undefined
// 6. NaN

console.log(`undefined == null -> ${undefined == null}`); // true
console.log(`undefined === null -> ${undefined === null}`); // false
console.log(`undefined == undefined -> ${undefined == undefined}`); // true
console.log(`undefined === undefined -> ${undefined === undefined}`); // true
console.log(`null == null -> ${null == null}`); // true
console.log(`null === null -> ${null === null}`); // true

// console.log((null = "value")); // ReferenceError
console.log((undefined = "value")); // 'value'

//

console.log(`undefined == "0" -> ${undefined == "0"}`); // false
console.log(`undefined == "" -> ${undefined == ""}`); // true
console.log(`undefined === "" -> ${undefined === ""}`); // false
console.log(`undefined == 0 -> ${undefined == 0}`); // false
console.log(`null == "0" -> ${null == "0"}`); // false
console.log(`null == "" -> ${null == ""}`); // true
console.log(`null === "" -> ${null === ""}`); // false
console.log(`null == 0 -> ${null == 0}`); // false
console.log(`1 == "1" -> ${1 == "1"}`); // true
console.log(`0.1 == 0.1 -> ${0.1 == 0.1}`); // true
console.log(`0.1 == "0.1" -> ${0.1 === "1"}`); // false
console.log(`0.1 + 0.2 == 0.3 -> ${0.1 + 0.2 == 0.3}`); // false
