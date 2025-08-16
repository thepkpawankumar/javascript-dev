"use strict"
let a = [1, 55, 4, 56, 6, 10, 7];
let b = ["a", "b", "d", "aa", "abc", "res", "ffg"];

console.time("string-comparison");
b.sort(); // For string comparison
console.timeLog("string-comparison", b);
console.timeEnd("string-comparison");

 console.time("numbers-comparison");
a.sort((a,b) => a - b); // For number comparison
 console.timeLog("numbers-comparison", a);
console.timeEnd("numbers-comparison");

console.log(a);