/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 20 2022 21:05:29 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

function greet(arg1, arg2) {
  console.log({
    name: this.name,
    age: this.age,
    arg1,
    arg2,
  });
}

name = "global_chankruze";
age = "global_age";

// case 1 (global context, no arguments)
greet();
// context: global
// output: {name: 'global_chankruze', age: 'global_age', arg1: undefined, arg2: undefined}

// case 2 (global context, arguments)
greet("arg1", "arg2");
// context: global
// output: {name: 'global_chankruze', age: 'global_age', arg1: 'arg1', arg2: 'arg2'}

/**
 * call()
 */

// case 3 (object context, no arguments)
greet.call({ name: "chankruze", age: "22" });
// context: Object {name: 'chankruze', age: '22'}
// output: {name: 'chankruze', age: 22, arg1: undefined, arg2: undefined}

// case 4 (object context, arguments)
greet.call({ name: "chankruze", age: "22" }, "arg1", "arg2");
// context: Object {name: 'chankruze', age: '22'}
// output: {name: 'chankruze', age: 22, arg1: 'arg1', arg2: 'arg2'}

/**
 * apply()
 */

// case 5 (no context, arguments)
greet.apply(null, [1, 2]);
// context: global
// output: {name: 'global_chankruze', age: 'global_age', arg1: 1, arg2: 2}

// case 6 (object context, arguments)
greet.apply({ name: "chankruze", age: "22" }, [1, 2]);
// context: Object {name: 'chankruze', age: '22'}
// output: {name: 'chankruze', age: 22, arg1: 1, arg2: 2}

/**
 * bind()
 */

// case 7 (no context, no arguments)
greet.bind(null)();
// context: global
// output: {name: 'global_chankruze', age: 'global_age', arg1: undefined, arg2: undefined}

// case 8 (no context, arguments)
greet.bind(null, "arg1", "arg2")();
// context: global
// output: {name: 'global_chankruze', age: 'global_age', arg1: 'arg1', arg2: 'arg2'}

// case 9 (object context, arguments)
greet.bind({ name: "chankruze", age: "22" }, "arg1", "arg2")();
// context: Object {name: 'chankruze', age: '22'}
// output: {name: 'chankruze', age: 22, arg1: 'arg1', arg2: 'arg2'}
