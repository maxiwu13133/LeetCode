/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let words = s.trim().split(" ");
  words.reverse();
  words = words.filter(item => item !== "");
  return words.join(" ");
};

console.log(reverseWords("the sky is blue"));   // blue is sky the
console.log(reverseWords("  hello world  "));   // world hello
console.log(reverseWords("a good   example"));  // example good a