/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Apr 02 2022 06:15:24 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const array = [1, 2, 3, [4, 5], 6, [7, [8, [9, 10, [11, 12, [13, 14]]]], 15]];

const flatD1 = array.flat(1);
const flatD2 = array.flat(2);
const flatD3 = array.flat(3);
const flatD4 = array.flat(4);
const flatD5 = array.flat(5);

console.log(flatD1);
console.log(flatD2);
console.log(flatD3);
console.log(flatD4);
console.log(flatD5);

const demo = [1, 2, [3, 4, [5]]];

// flat one level
// const flat = [].concat(...Array.from(demo));
// flat two level
// const flat = [].concat(...[].concat(...Array.from(demo)));
// flat n level

// 1. flat using Array.prototype.reduce()
function flat1(array) {
  return array.reduce((temp, item) => {
    if (Array.isArray(item)) {
      temp = temp.concat(flat1(item));
    } else {
      temp.push(item);
    }

    return temp;
  }, []);
}

// 2. flat using Array.protoype.forEach()
function flat2(array) {
  let flatArray = [];

  array.forEach((element) => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flat2(element));
    } else {
      flatArray.push(element);
    }
  });

  return flatArray;
}

const flatC1 = flat1(demo);
const flatC2 = flat2(demo);

console.log(flatC1);
console.log(flatC2);
