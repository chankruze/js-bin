/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 17:27:25 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

// Using JS, convert:
// [ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]
// To:
// "a < b OR (c == d AND e != f)"

// convert [ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ] to "a < b OR (c == d AND e != f)"

const array = [
  "OR",
  ["<", "a", "b"],
  ["AND", ["==", "c", "d"], ["!=", "e", "f"]],
];

// convert to a < b OR (c == d AND e != f)
function convert(array) {
  let result = [];

  array.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat([convert(item)]);
    } else {
      result.push(item);
    }
  });

  result = [result[1], result[0], result[2]];

  return `(${result.join(" ")})`;
}

function convertToString(array) {
  let result = "";

  array.forEach((element) => {
    if (Array.isArray(element)) {
      result += convertToString(element);
    } else {
      result += element;
    }
  });

  //   if (Array.isArray(array)) {
  //     result = `(${array.map((item) => convertToString(item)).join(" ")})`;
  //   } else {
  //     result = array;
  //   }

  return result;
}

console.log(convert(array));

// const arr = ["==", "b", "c"];

// const swap = (arr) => {
//   return (arr2 = [arr[1], arr[0], arr[2]]);
// };

// console.log(swap(arr));
