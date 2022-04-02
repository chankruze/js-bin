/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 01 2022 23:54:26 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

class Eval {
  // constructor
  constructor(num) {
    this.total = num;
  }
  // add function
  add(num) {
    this.total += num;
    return this;
  }
  // subtract
  subtract(num) {
    this.total -= num;
    return this;
  }
  // multiply
  multiply(num) {
    this.total *= num;
    return this;
  }
  // divide
  divide(num) {
    this.total /= num;
    return this;
  }
}

const eval0 = new Eval(10).add(5).subtract(5).divide(2).multiply(7);
const eval1 = new Eval(10).subtract(5).divide(2).multiply(7).add(5);
const eval2 = new Eval(10).subtract(5).divide(2).add(5).multiply(7);
const eval3 = new Eval(10).multiply(7).divide(2).subtract(5).add(8);

console.log(eval0.total);
console.log(eval1.total);
console.log(eval2.total);
console.log(eval3.total);
