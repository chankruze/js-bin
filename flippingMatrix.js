/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 22 2022 19:41:39 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

// m[i][j] ⇌ m[i][(2n-1)-j] ⇌ m[(2n-1)-i][j] ⇌ m[(2n-1)-i][(2n-1)-j]

function flippingMatrix(n, matrix) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += Math.max(
        matrix[i][j],
        matrix[i][2 * n - 1 - j],
        matrix[2 * n - 1 - i][j],
        matrix[2 * n - 1 - i][2 * n - 1 - j]
      );
    }
  }

  return sum;
}

console.log(
  flippingMatrix(1, [
    [1, 2],
    [3, 4],
  ])
);

console.log(
  flippingMatrix(2, [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
);
