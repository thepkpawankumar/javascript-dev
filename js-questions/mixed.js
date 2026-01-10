"use strict";

let a = 150;

if(function xyz(){}) {

    // a is accessible here due to nested function scope, it is nested in outer global scope
    a = a  - typeof xyz; // NaN, because typeof xyz is 'undefined'
    a = a + typeof xyz; // 150undefined

}
console.log(a); // NaN

function test(){

    console.log("inside test");
}

console.log(typeof test); // function


let obj = {
    xyz: "Pawan",
    pqr: function(){
        console.log(this.xyz, "Test");
    }
}

const c = obj.pqr;
obj.pqr(); // Pawan
c(); // undefined, because this refers to global object
// and under strict mode it throws TypeError 
