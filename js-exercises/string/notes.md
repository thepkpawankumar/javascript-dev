# Plain Object concepts in JS
In javascript, object keys in plain objects ({}) are always strings or symbols
If we passed object as key then it will coerced to "[object object]", javascript automatically calls toSting() method on it

Example:
```javascript
const a = {name: "Pawan"};
const b = {name: "Kumar"};

a[b] = {name: "Singh"};

// a["[object Object]"] = { name: "Singh" };

```
# Symbol in javascript
Symbol are primitive data types that always give unique symbol even with same description

```javascript
const a = Symbol("id");
const b = Symbol("id");

console.log(a === b); // false

Symbol.for()

This one reuses symbols from a global registry.

const a = Symbol.for("id");
const b = Symbol.for("id");

console.log(a === b); // true

- Symbol() → always unique.
- Symbol.for(key) → shared/reused by the same key.
```
Symbol keys don't show up in for...in, Object.keys, or JSON.stringify.

```javascript
const password = Symbol("password");

const user = {
  name: "Pawan",
  [password]: "secret123"
};

console.log(Object.keys(user)); // ["name"]
console.log(user[password]);    // "secret123"
```