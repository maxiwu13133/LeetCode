/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
  const sIndex = {};

  for (let i = 0; i < s.length; i++) {
    sIndex[s[i]] = i;
  }

  let difference = 0;
  
  for (let i = 0; i < t.length; i++) {
    difference += Math.abs(i - sIndex[t[i]]);
  }

  return difference;
};

console.log(findPermutationDifference(s = "abc", t = "bac"));      // 2
console.log(findPermutationDifference(s = "abcde", t = "edbac"));  // 12