//console.log(a);

// Both let and const are hoisted but these are not initialized during hoisting, these give reference errors
// 
// Constants should be intialized before use
//const a; //  Wrong
//let b; //  Wrong as we are trying to use it before declaration
//const c = 10; // Correct

//let b; // We can't declare a variable with the same name in the same scope

let d = 10;

d = 15;
console.log(d); // 15
//console.log(b, typeof b, typeof undefined); // undefined, undefined

{
    let b; // This b is a different variable, scoped to this block
    // TDZ: Temporal Dead Zone for a starts here
    // console.log(a); // ReferenceError: Cannot access 'a' before initialization
   // let a = 10; // This is a block scoped variable
    // TDZ ends here
    //console.log(a); // 10
}

console.log(funA());
//console.log(funB());
//console.log(typeof funB); // RefrenceError: Cannot access 'funB' before initialization
//console.log(funB()); // TypeError: funB is not a function
// funB is hoisted and initialized to undefined.
// So the error is not ReferenceError but TypeError, 
// because you're trying to call undefined as a function.

function funA() {
    return "Hello from funA";
}

var funC = function() {
    return "funC";
};  // This is a function expression, function expression itself not hoisted, it will get memory at run time
const funB = () => console.log("funB called");

// TDZ ends when a let or const variable is initialized.

/**
 * 
 * There are 3 types of scope in javascript:
 * Every function creates a block — so function scope is a special case of block scope.
But not every block creates a function scope. Only functions do that for var.
 * 1. Global Scope: Variables declared outside any function or block.   ]
 * 2. Function Scope: Variables declared within a function using var, let, or const.
 * 3. Block Scope: Variables declared within a block (enclosed by {}) using let or const.
 * JavaScript uses lexical scoping, meaning variables are resolved by looking at where functions are defined in the code, not where they are called at runtime.
 * var becomes property of window object in global scope and let and const won't 
 */


let a = 10;

function a1() {
    console.log(a);
}

function b() {
    let a = 20;
    console.log(a1()); // a will refer to the global variable a, which is 10 due to lexical scoping
}
b();

function abc(){
    var aa = 30; // This 'a' is function scoped
    console.log(aa); // 30
}

console.log(abc()); // 30
console.log(aa); // 10, global 'aa' is not accessible as it is not defined in the global scope