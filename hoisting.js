/*
Author: chankruze (chankruze@gmail.com)
Created: Mon May 23 2022 18:03:37 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

foo();
// bar();
// zoo();
console.log(a);
console.log(foo);
console.log(bar);
console.log(zoo);

var a = 10;

function foo() {
  console.log(a);
}

var bar = () => {
  console.log(a);
};

var zoo = function () {
  console.log(a);
};
