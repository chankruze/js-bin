/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 21 2022 14:09:36 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const dataArray = [1, 2, 3, 4, "5", undefined, null, NaN, "abc123", "10"];

const sum = dataArray.reduce((acc, curr) => {
  if (!curr || isNaN(curr)) {
    return acc;
  }

  return acc + parseInt(curr, 10);
});

console.log(sum);
