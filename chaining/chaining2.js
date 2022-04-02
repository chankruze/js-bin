/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 01 2022 23:52:29 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const chain = {
  total: 0,
  // initialize the total with an initial value
  init(num) {
    this.total = num;
    return this;
  },
  // add function
  add(num) {
    this.total += num;
    return this;
  },
  subtract(num) {
    this.total -= num;
    return this;
  },
  multiply(num) {
    this.total *= num;
    return this;
  },
  divide(num) {
    this.total /= num;
    return this;
  },
};

chain.init(10).add(5).subtract(5).divide(2).multiply(2);

console.log(chain.total);
