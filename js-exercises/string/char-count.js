"use strict"

const str = "I am a web developer";

// Using for of loop

const charCount = {};

for (const char of str) {

    if(char == " ") continue;
    charCount[char] =  (charCount[char] || 0) + 1;
}

//console.log(charCount);

// Using reduce

// const charCountReducr = str.split("").reduce((acc, curr) => {

//     if(curr !== " ") {
//         acc[curr] = (acc[curr] || 0) + 1;
//         return acc;
//     }
//     return acc;

// }, {});

const charCountReducr = str.split("").reduce((acc, curr) => (curr !== " " 
&& (acc[curr] = (acc[curr] || 0) + 1), acc), {});
console.log(charCountReducr);

// Using map

const charCountMap = new Map();

for (const char of str) {
    char !== " " && charCountMap.set(char, (charCountMap.get(char) || 0)+ 1)
}

// Use map for unicode and emoji as for plain objects keys are always string and for map
// key can be anything even object

console.log(charCountMap);
