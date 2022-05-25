/*
Author: chankruze (chankruze@gmail.com)
Created: Mon May 23 2022 19:07:44 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const oldObj = { a: { b: 10 }, c: 2 };
const newObj = { ...oldObj };

oldObj.a.b = 2; // It also changes the newObj `b` value as `newObj` and `oldObj`'s `b` property allocates the same memory address.
oldObj.c = 5; // It changes the oldObj `c` but untouched at the newObj

console.log("oldObj:", oldObj);
console.log("newObj:", newObj);

// function x() {}

// const y = {};

// const val = null;

// if (!val) {
//   console.log(typeof x === "function");
//   console.log(typeof y === "object");
// }

var obj = {
  name: "Gash",
  age: "18",
  abc: () => this.name,
  abc2: function () {
    return this.name;
  },
};

console.log(obj.abc());
console.log(obj.abc2());

const arr = [];
