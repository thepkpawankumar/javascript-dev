"use strict";

const str = "Pawan singh";

const rev1Fn = item => item.split("").reverse().join("");
const rev2Fn = item => [...item].reverse().join("");
const rev3Fn = item => [...item].map(a => a.toLowerCase()).reverse().join("");
const reverse1 = rev1Fn(str);

const reverse2 = str.split(" ").map(rev2Fn).join(" ");

const palinrome = str => rev3Fn(str) === str.toLowerCase();

// console.log(palinrome("RAr"));

// console.log([..."Rar"].map(a => a.toLowerCase()));

const str3 = "IAmPawan";

//const addSpace = [...str3];

let newStr = "";

for (const i of str3) {

    if(i.toUpperCase() == i) {

        newStr += " " + i;
    } else {
        newStr += i;
    }

}

const sStr = [...str3].reduce((acc, ch) => acc += (ch.toUpperCase() === ch ? " ": "")+ch, "").trim();

console.log(sStr);