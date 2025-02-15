/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  const chars = s.split("");
  let total = 0;
  for (let i = 0; i < chars.length - 1; i++) {
    total += Math.abs(chars[i].charCodeAt(0) - chars[i + 1].charCodeAt(0));
  }
  return total;
};

console.log(scoreOfString(s = "hello"));  // 13
console.log(scoreOfString(s = "zaz"));    // 50
