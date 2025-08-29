function fibonacci(n) {
   let seq = [0, 1];
   for (let i = 2; i < n; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
     }
    console.log(seq.slice(0, n));
}

fibonacci(10);

// Excluding 0 and 1

function fibonacci(n) {
  let seq = [0, 1];
  for (let i = 2; i < n + 2; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq.slice(2); // exclude 0 and 1
}

console.log(fibonacci(10)); 
// [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// Up to a given maximum value
function fibonacciUpTo(max) {
  let seq = [0, 1];
  let next = seq[0] + seq[1];

  while (next <= max) {
    seq.push(next);
    let len = seq.length;
    next = seq[len - 1] + seq[len - 2];
  }

  return seq.slice(2); // exclude 0 and 1
}

console.log(fibonacciUpTo(100));
// [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]


// Recursive Fibonacci (excluding 0 and 1)
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function fibonacciSeries(n) {
  let result = [];
  for (let i = 0; i < n + 2; i++) {
    result.push(fib(i));
  }
  return result.slice(2); // remove 0 and 1
}

console.log(fibonacciSeries(8));
// [1, 2, 3, 5, 8, 13, 21, 34]


// Recursive Fibonacci with memoization (excluding 0 and 1)
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

function fibonacciSeries(n) {
  let result = [];
  for (let i = 0; i < n + 2; i++) {
    result.push(fib(i));
  }
  return result.slice(2); // exclude 0 and 1
}

console.log(fibonacciSeries(8));
// [1, 2, 3, 5, 8, 13, 21, 34]
