# Methods to reverse the string

## Using split and join
```javascript
"Pawan".split("").reverse().join("");
```
## Using spread
```javascript
[..."Pawan"].reverse().join("");
```

## Using for loop
```javascript
const str = "pawan";
let reverseString = "";
for (let i = str.length-1; i >= 0; i--) {
    reverseString += str[i];
}
```

## Using recursion
It is not a recommended method, it is just for practise

```javascript
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

reverseString("pawan");
```

## Using for of
```javascript
let reverseString = "";
const str = "pawan";
for (let ch of str) {
    reverseString = ch + reverseString;
}

```

## Using reduce
```javascript
const rev = [..."pawan"].reduce((acc,ch) => acc = ch + acc, "");

```
## Using Array.from & map
```javascript
const str = "pawan";
const rev = Array.from(str).map((_, i) => str[str.length - 1 - i]).join("");
```

## Using all params of map
```javascript
const str = "pawan";
const reversed = [...str].map((_, i, arr) => arr[arr.length - 1 - i]).join("");
```

## If we want to reverse every word in the string
```javascript
const str = "Pawan singh";
const revFn = item => [...item].reverse().join("");
const reverseWords = str.split(" ").map(revFn).join(" ");
const palinrome = str => revFn(str) === str;
```