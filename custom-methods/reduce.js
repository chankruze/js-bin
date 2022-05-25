/*
Author: chankruze (chankruze@gmail.com)
Created: Wed May 25 2022 22:26:55 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const data = [1, 2, 3];

/**
 * @param {Array} array
 * @param {Function} callback
 * @param {*} initialValue
 */
const reduce = (array, callback, initialValue = []) => {
  let result = initialValue;

  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i], i, array);
  }

  return result;
};

const result1 = reduce(data, (prev, curr) => prev + curr, 0);
const result2 = reduce(data, (prev, curr) => [...prev, curr * 2], []);

console.log(result1);
console.log(result2);
