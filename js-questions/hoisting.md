# JavaScript Hoisting – Complete Reference

This README explains **all hoisting-related constructs in JavaScript**, how they behave, and *why* they behave that way. It goes beyond `var`, `let`, and `const` to cover **functions, classes, imports, parameters, and more**.

---

## What is Hoisting?

> **Hoisting is the process by which JavaScript registers bindings during the creation phase of an execution context.**

Hoisting does **NOT** move code. It only creates identifiers *before execution begins*.

---

## 1. `var`

```js
console.log(a); // undefined
var a = 10;
```

* ✅ Hoisted
* ✅ Initialized to `undefined`
* ❌ No block scope

Equivalent to:

```js
var a;
console.log(a);
a = 10;
```

---

## 2. `let`

```js
console.log(b); // ReferenceError
let b = 10;
```

* ✅ Hoisted
* ❌ Uninitialized (Temporal Dead Zone)
* ✅ Block scoped

---

## 3. `const`

```js
console.log(c); // ReferenceError
const c = 10;
```

* ✅ Hoisted
* ❌ Uninitialized (TDZ)
* ❌ Must be initialized immediately

---

## 4. Function Declarations

```js
foo(); // works

function foo() {
  console.log("Hello");
}
```

* ✅ Hoisted
* ✅ Fully initialized
* ✅ Callable before declaration

Functions are hoisted **before variables**.

---

## 5. Function Expressions

```js
bar(); // TypeError
var bar = function () {};
```

* ❌ Function body not hoisted
* ✅ Variable binding hoisted (depends on var/let/const)

---

## 6. Named Function Expressions

```js
const test = function inner() {
  console.log(inner);
};

inner(); // ReferenceError
```

* Name exists **only inside function body**
* Useful for recursion and stack traces

---

## 7. Classes

```js
new A(); // ReferenceError

class A {}
```

* ✅ Hoisted
* ❌ Uninitialized (TDZ)
* ❌ Cannot be used before declaration
* Always in strict mode

---

## 8. Parameters

```js
function test(a) {
  console.log(a);
}
```

* ✅ Hoisted
* ✅ Initialized before function body
* Exist in a separate **parameter scope**

---

## 9. Default Parameters

```js
function test(a = b, b = 10) {}
```

❌ ReferenceError

* Default parameters are evaluated **left to right**
* Parameters have TDZ-like behavior

---

## 10. Imports (ES Modules)

```js
import { foo } from './module.js';

foo();
```

* ✅ Hoisted
* ✅ Fully initialized
* ✅ Live bindings
* ❌ Read-only

Imports are resolved **before any code executes**.

---

## 11. `catch` Clause Variables

```js
try {
  throw 10;
} catch (err) {
  console.log(err);
}
```

* ✅ Hoisted
* ✅ Block scoped
* Only exists inside `catch`

---

## 12. Labels

```js
loop:
for (;;) {
  break loop;
}
```

* ✅ Registered during parsing
* Rare but hoisted

---

## 13. `arguments` Object

```js
function test() {
  console.log(arguments);
}
```

* ✅ Created before execution
* Exists automatically inside functions

---

## 14. `this` Binding

```js
function test() {
  console.log(this);
}
```

* ✅ Bound during execution context creation
* ❌ Not hoisted like variables
* Depends on call-site

---

## 15. `super`

```js
class A extends B {
  constructor() {
    super();
  }
}
```

* ✅ Binding exists
* ❌ Cannot be used before `super()`

---

## 16. `new.target`

```js
function Test() {
  console.log(new.target);
}
```

* ✅ Exists before execution
* `undefined` if not called with `new`

---

## Conditional Function Expressions (`if (function name() {})`)

This is a **common JavaScript interview trap** and a real-world source of confusion.

### Example

```js
let x = 10;

if (function ab() { x = 20 }) {
  console.log(x + typeof ab);
}
```

### Output

```txt
10undefined
```

### Why this happens

* `function ab() {}` here is a **function expression**, not a declaration
* The function is **not executed**
* The name `ab` is **scoped only inside the function body**
* Outside the function → `ab` does not exist
* `typeof ab` returns `"undefined"` (no ReferenceError)

---

### Case 1: Executing the function expression (IIFE)

```js
let x = 10;

if ((function ab() { x = 20; return true; })()) {
  console.log(x);
}
```

✔ Output:

```txt
20
```

---

### Case 2: Function declaration inside `if`

```js
if (true) {
  function test() {}
}

console.log(typeof test);
```

* **Strict mode** → `ReferenceError`
* **Non-strict (legacy browsers)** → `"function"`

⚠️ Behavior is inconsistent → avoid.

---

### Case 3: Using a function reference (correct pattern)

```js
function ab() {
  return true;
}

if (ab) {
  console.log(typeof ab);
}
```

✔ Output:

```txt
function
```

---

### Case 4: Why this is a code smell

```js
if (function () {}) {}
```

* Condition is **always truthy**
* Function is never executed
* Makes code misleading and unreadable

✔ Prefer:

```js
if (someCondition) {}
```

---

### Key Rule 🧠

> **Named function expressions create bindings only inside the function body — never in the outer scope.**

---

## Summary Table

| Construct            | Hoisted | Initialized |
| -------------------- | ------- | ----------- |
| var                  | ✅       | undefined   |
| let                  | ✅       | ❌ TDZ       |
| const                | ✅       | ❌ TDZ       |
| function declaration | ✅       | ✅           |
| function expression  | ❌       | ❌           |
| class                | ✅       | ❌ TDZ       |
| parameters           | ✅       | ✅           |
| imports              | ✅       | ✅           |
| catch variables      | ✅       | ✅           |
| arguments            | ✅       | ✅           |
| this                 | ✅       | Contextual  |
| labels               | ✅       | N/A         |

---

## Key Mental Model 🧠

> **Hoisting is about what exists before execution begins — not about moving code to the top.**

---

## Best Practices

* Prefer `let` / `const` over `var`
* Avoid relying on hoisting for logic
* Never reuse names for variables and functions
* Use function declarations for core utilities

---

## License

MIT
