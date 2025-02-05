/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const vowels = ["a", "e", "i", "o", "u"];

  let windowSum = s.split("").slice(0, k).reduce((count, char) => vowels.includes(char) ? ++count : count , 0);

  let max = windowSum;
  for (let i = k; i < s.length; i++) {
    if (windowSum === k) return windowSum;
    if (vowels.includes(s[i - k])) {
      windowSum--;
    }
    if (vowels.includes(s[i])) {
      windowSum++;
    }

    max = Math.max(windowSum, max);
  }

  return max;
};

console.log(maxVowels(s = "abciiidef", k = 3));  // 3
console.log(maxVowels(s = "aeiou", k = 2));      // 2
console.log(maxVowels(s = "leetcode", k = 3));   // 2