/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  const occurences1 = {};
  const occurences2 = {};

  if (word1.length !== word2.length) return false;

  for (let i = 0; i < word1.length; i++) {
    occurences1[word1[i]] = (occurences1[word1[i]] + 1) || 1;
    occurences2[word2[i]] = (occurences2[word2[i]] + 1) || 1;
  }

  const keys1 = Object.keys(occurences1).sort();
  const keys2 = Object.keys(occurences2).sort();
  const values1 = Object.values(occurences1).sort();
  const values2 = Object.values(occurences2).sort();

  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) return false;
    if (values1[i] !== values2[i]) return false;
  }

  return true;
};

console.log(closeStrings(word1 = "abc", word2 = "bca"));        // true
console.log(closeStrings(word1 = "a", word2 = "aa"));           // false
console.log(closeStrings(word1 = "cabbba", word2 = "abbccc"));  // true
