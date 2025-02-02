/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const divisor = gcd(str1.length, str2.length);
  return (str1.slice(0, divisor));
};

console.log(gcdOfStrings("ABCABC", "ABC"));   // ABC
console.log(gcdOfStrings("ABABAB", "ABAB"));  // AB
console.log(gcdOfStrings("LEET", "CODE"));    // 