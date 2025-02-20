/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return String(x) === String(x).split("").toReversed().join("");
};

console.log(isPalindrome(x = 121));   // true
console.log(isPalindrome(x = -121));  // false 
console.log(isPalindrome(x = 10));    // false