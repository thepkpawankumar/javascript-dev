"use strict";

let str1 = "abc";
let str2 = "12345";

// Using for loop
function alternateStringMerge(s1, s2) {
    let merged = "";
    let maxLen = Math.max(s1.length, s2.length);

    for (let i = 0; i < maxLen; i++) {
        if (i < s1.length) {
            merged += s1[i];
        }
        if (i < s2.length) {
            merged += s2[i];
        }
    }

    return merged;
}

// Using array and join
function alternateStringMergeUsingArray(s1, s2) {
    let merged = [];
    let maxLen = Math.max(s1.length, s2.length);

    for (let i = 0; i < maxLen; i++) {
        if (i < s1.length) {
            merged.push(s1[i]);
        }
        if (i < s2.length) {
             merged.push(s2[i]);
        }
    }

    return merged.join("");
}

// Using map, spread operator and join
const merged = [...Array(Math.max(str1.length, str2.length))].map((_,i) => (str1[i] || "") + (str2[i] || "")).join("");

// Using reduce, spread operator and join
const mergedReduced = [...Array(Math.max(str1.length, str2.length))].reduce((acc, _, i) => acc + (str1[i] || "") + (str2[i] || ""), "");


//console.log(mergedReduced);

//console.log(merged);
//console.log(alternateStringMerge(str1, str2)); // Output: "a1b2c345"
//console.log(alternateStringMergeUsingArray(str1, str2)); // Output: "a1b2c345"

// Using recursion
function alternateStringMergeRecursion(s1, s2, i = 0, merged = "") {
    if (i >= s1.length && i >= s2.length) {
        return merged;
    }

    if (i < s1.length) {
        merged += s1[i];
    }
    if (i < s2.length) {
        merged += s2[i];
    }

    return alternateStringMergeRecursion(s1, s2, i + 1, merged);
}

// Using generator function
function* alternateStringMergeGenerator(s1, s2) {       
    let maxLen = Math.max(s1.length, s2.length);

    for (let i = 0; i < maxLen; i++) {
        if (i < s1.length) {
            yield s1[i];
        }
        if (i < s2.length) {
            yield s2[i];
        }
    }
}
//const mergedFromGenerator = [...alternateStringMergeGenerator(str1, str2)].join("");
//console.log(mergedFromGenerator);

// Using while loop
function alternateStringMergeWhileLoop(s1, s2) {   
    let merged = "";
    let i = 0, j = 0;

    while (i < s1.length || j < s2.length) {
        if (i < s1.length) {
            merged += s1[i++];
        }
        if (j < s2.length) {
            merged += s2[j++];
        }
    }

    return merged;
}