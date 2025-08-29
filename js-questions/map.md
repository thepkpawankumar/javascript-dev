# MAP function
- **Array method** in JavaScript
- Transforms each element of the array using callback function
- Returns new array of the same length
- Doesn't modify the original array (non-mutating)
- Don't use map for just iteration purpose, use `forEach` instead
- `map()` is for transformation, not iteration without return.
- Syntax:

```javascript
array.map(callbackFn, thisArg)
```
```javascript
array.map(function(currentVal, index, arr){
// return transformed value
}, thisArg)
```
`map` with `thisArg`
```javascript
const multiplier = {
  factor: 2
};

const nums = [1, 2, 3];
const doubled = nums.map(function(num) {
  return num * this.factor;  // `this` refers to `multiplier`
}, multiplier);

console.log(doubled); // [2, 4, 6]
```
`this` will not work in case of arrow functions

```javascript

nums.map((num) => num * this.factor, multiplier);
// this.factor is undefined because arrow functions use lexical this

const multiplier = {
  factor: 2,
  mul() {
    return [1, 2, 4].map(item => item * this.factor);
  }
};

console.log(multiplier.mul()); // [2, 4, 8]

OR
function multiplier() {
    this.factor = 2;
    let mul = [1, 2, 3].map(item => item * this.factor); // works now
    console.log("mul", mul);
}

new multiplier(); // mul [2, 4, 6]
```

in case of react js, we face a common issue when using map

```javascript
    {[1, 2, 3].map(item => {
        <div key={item}>{item}</div>
    })}
```
it will not display, as using `{}` in arrow function starts a block, it doesn't return implicitly, if we want to use` {}` then we have to return explicity or use `()`

like
```javascript
   {[1, 2, 3].map(item => {
        item *= 2; // Useful if we want to do some calculation before display
        return <div key={item}>{item}</div>
    })}

    OR
       {[1, 2, 3].map(item => (
         <div key={item}>{item}</div>
    ))}
    OR in one line like this
     {[1, 2, 3].map(item =>  <div key={item}>{item}</div>)}
```

```javascript

let arr = [1, 2, 3, 4, 2];

let newArr = arr.filter(item => item=2); // [1,2,3,4,2]
let newArr = arr.map(item => item=2); //[2,2,2,2,2]
let newArr = arr.reduce(item => item=2); //2
```