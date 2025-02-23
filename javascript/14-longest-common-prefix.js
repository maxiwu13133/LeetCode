/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const prefix = [...strs[0]];

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < Math.max(strs[i].length, prefix.length); j++) {
      if (prefix[j] !== strs[i][j]) {
        prefix.splice(j)
      }
    }
  }

  return prefix.join("");
};

// console.log(longestCommonPrefix(strs = ["flower","flow","flight"]));  // fl
// console.log(longestCommonPrefix(strs = ["dog","racecar","car"]));     // 
console.log(longestCommonPrefix(strs = ["ab", "a"]));     // 