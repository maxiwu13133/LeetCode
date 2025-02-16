/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  return n % 2 === 0 ? n : n * 2;
};

console.log(smallestEvenMultiple(n = 5));  // 10
console.log(smallestEvenMultiple(n = 6));  // 6