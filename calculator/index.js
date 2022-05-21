/*
Author: chankruze (chankruze@gmail.com)
Created: Tue May 10 2022 17:02:18 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  remainder: (a, b) => a % b,
  power: (a, b) => a ** b,
  square: (a) => a * a,
  cube: (a) => a * a * a,
  squareRoot: (a) => Math.sqrt(a),
  cubeRoot: (a) => Math.cbrt(a),
  factorial: (a) => {
    if (a === 0) {
      return 1;
    }
    return a * factorial(a - 1);
  },
  sin: (a) => Math.sin(a),
  cos: (a) => Math.cos(a),
  tan: (a) => Math.tan(a),
  asin: (a) => Math.asin(a),
  acos: (a) => Math.acos(a),
  atan: (a) => Math.atan(a),
  log: (a) => Math.log(a),
  ln: (a) => Math.log(a),
  log10: (a) => Math.log10(a),
  exp: (a) => Math.exp(a),
  pi: Math.PI,
  e: Math.E,
  degrees: (a) => a * (180 / Math.PI),
  radians: (a) => a * (Math.PI / 180),
  round: (a) => Math.round(a),
  floor: (a) => Math.floor(a),
  ceil: (a) => Math.ceil(a),
  abs: (a) => Math.abs(a),
};
