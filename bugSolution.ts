function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // Correct usage
console.log(result); // Output: 3

try {
  let result2 = add(1, '2'); // Incorrect usage
} catch (e) {
  console.error(e.message); // Output: Both arguments must be numbers
}
