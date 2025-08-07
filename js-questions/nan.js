"use strict"
console.log("Pawan" < 9); // false
console.log("Pawan" > 9); // false

//It will be compiled to

// When you use comparison operators (<, >, etc.) between a string and a number, JavaScript tries to coerce the string into a number.
// typeof NaN // "number"
//Number("abc")     // NaN
//0 / 0             // NaN
//Math.sqrt(-1)     // NaN
// NaN is actually defined as a numeric value in the IEEE 754 floating-point standard, which JavaScript follows.

// Number.isNaN("hello") // false
// isNaN("hello") // true, because isNaN() coerces the string to a number and checks if the result is NaN

console.log(NaN === NaN); // false

Object.is(NaN, NaN); // true
