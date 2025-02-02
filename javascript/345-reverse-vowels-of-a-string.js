/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  const letters = s.split("");

  for (let i = 0, j = letters.length - 1; i < j; i++) {
    if (vowels.includes(letters[i])) {
      while (!vowels.includes(letters[j])) {
        j -= 1;
      }
      [letters[i], letters[j]] = [letters[j], letters[i]];
      j -= 1;
    }
  }

  return letters.join("");
};

console.log(reverseVowels("IceCreAm"));  // AceCreIm
console.log(reverseVowels("leetcode"));  // leotcede