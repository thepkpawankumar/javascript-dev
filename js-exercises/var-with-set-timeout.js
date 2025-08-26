"use strict";

for(var i = 0; i < 5; i++) {
    
   // setTimeout(() => console.log(i), 1000); // 5, 5, 5, 5, 5 due to 
    // function scope of var
    
    //setTimeout((x) => console.log(x), 1000, i); // Sol 1 , passing i as argument to callback function

    //(x => setTimeout(() => console.log(x)))(i); // Sol 2, IIFE
    // Using let instead of var
}