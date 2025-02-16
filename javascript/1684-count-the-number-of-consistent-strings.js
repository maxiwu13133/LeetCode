/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let count = 0;
  for (let i = 0 ; i < words.length; i++) {
    let consistent = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.includes(words[i][j])) {
        consistent = false;
      }
    }
    if (consistent) count++;
  }
  return count;
};

console.log(countConsistentStrings(allowed = "ab", words = ["ad","bd","aaab","baa","badab"]));             // 2
console.log(countConsistentStrings(allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]));          // 7
console.log(countConsistentStrings(allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]));  // 4
