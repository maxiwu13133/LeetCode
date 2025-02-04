/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const sChars = s.split("");
  const tChars = t.split("");
  let j = 0;

  for (let i = 0; i < tChars.length; i++) {
    if (tChars[i] === sChars[j]) j++;
  };

  return j === sChars.length;
}

console.log(isSubsequence(s = "abc", t = "ahbgdc"));  // true
console.log(isSubsequence(s = "axc", t = "ahbgdc"));  // false
