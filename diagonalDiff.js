/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 22 2022 18:51:57 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalDifference(n, arr) {
  // Write your code here
  let sum1 = 0;
  let sum2 = 0;

  arr.map((el, idx) => {
    sum1 += el[idx];
    sum2 += el[n - 1 - idx];
  });

  return Math.abs(sum1 - sum2);
}

console.log(diagonalDifference(3, matrix));
