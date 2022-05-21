/*
Author: chankruze (chankruze@gmail.com)
Created: Tue May 10 2022 11:43:14 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

// Infinite currying
// sum(1)(2)(3)(4)(5)()

function sum(val1) {
  return function (val2) {
    if (val2) {
      return sum(val1 + val2);
    }
    return val1;
  };
}

console.log(sum(4)(7)(8)(9)());
