/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 01 2022 23:41:48 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

// TODO: value.add(5).multiply(6).subtract(10).divide(2)

const chain = {
  total: 0,
  // initialize the total with an initial value
  init: function (num) {
    this.total = num;
    return this;
  },
  // add function
  add: function (num) {
    this.total += num;
    return this;
  },
  // subtract function
  subtract: function (num) {
    this.total -= num;
    return this;
  },
  // multiply function
  multiply: function (num) {
    this.total *= num;
    return this;
  },
  // division function
  divide: function (num) {
    this.total /= num;
    return this;
  },
};

// chained operations with initial value
chain.init(10).add(5).subtract(5).divide(2).multiply(2);

console.log(chain.total);
