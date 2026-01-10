const arr = [1, 2, 3, 1, 4, 5];

console.log(arr.includes(1, 4)); // false, starts searching from index 4
console.log(arr.includes(1, -4)); // true, starts searching from index arr.length - 4 = 2