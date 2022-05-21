/*
Author: chankruze (chankruze@gmail.com)
Created: Tue May 10 2022 17:01:02 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const assert = require("assert");
const { add, subtract } = require("./calculator");

test("should add two numbers", () => {
  assert.equal(add(1, 2), 3);
});

test("should subtract two numbers", () => {
  assert.equal(subtract(3, 2), 1);
});
