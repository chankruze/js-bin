/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 22 2022 19:00:32 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

// https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1

function countingSort(arr) {
  // Write your code here
  const frequencyArray = Array(100).fill(0);

  arr.forEach((el) => {
    frequencyArray[el]++;
  });

  return frequencyArray;

  // return sorted array
  // return frequencyArray.reduce((prev, curr, idx, arr) => {
  //   return [...prev, ...Array(curr).fill(idx)];
  // }, []);
}

console.log(countingSort([1, 1, 3, 2, 1]));
