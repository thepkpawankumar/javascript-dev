"use strict";

let public = 1; // SyntaxError: Unexpected strict mode reserved word
/**
 * Catches more silent errors
 * Makes debugging easier
 * Creates a cleaner global scope
 * Disallows certain syntax that is likely to be confusing or error-prone
 * Prevents the use of some features that are considered problematic
 */
x= 10; // It will be a reference error
//console.log(x, globalThis.x); // 10, window.x will be used only in browser environment

//console.log( global);
function test() {
    console.log(this); // In strict mode, 'this' is undefined in functions not called as methods of an object
}
test();

function sum(a, a) { // Duplicate parameter names are not allowed in strict mode
    return a + a;
}
//console.log(sum(5, 10)); // 20, but this is not recommended as it can lead to confusion