/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  const sum = (n * (n + 1)) / 2;
  const frequency = Math.floor(n / m);

  return sum - (2 *(frequency * ((2 * m) + ((frequency - 1) * m))) / 2);
};


console.log(differenceOfSums(10, 3));  // 19
console.log(differenceOfSums(5, 6));   // 15
console.log(differenceOfSums(5, 1));   // -15