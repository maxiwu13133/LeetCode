/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const maxLength = Math.max(word1.length, word2.length);
  let ans = "";

  for (let i = 0; i < maxLength; i++) {
    ans += (word1[i] ?? "") + (word2[i] ?? "");
  }

  return ans;
};

console.log(mergeAlternately("abc", "pqr"));  // apbqcr
console.log(mergeAlternately("ab", "pqrs"));  // apbqrs
console.log(mergeAlternately("abcd", "pq"));  // apbqcd
