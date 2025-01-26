/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanDict = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result += romanDict[s[i + 1]] > romanDict[s[i]] ? - romanDict[s[i]] : romanDict[s[i]];
  }

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));