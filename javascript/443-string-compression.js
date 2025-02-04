/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let n = chars.length;
  let count = 1;
  
  for (let i = n - 2; i >= 0; i--) {
      if (chars[i] == chars[i+1]) {
          count++;
      } else if (count > 1) {
          chars.splice(i+2, count-1, ...count.toString().split(''));           
          count = 1;
      }
  }
  
  if (count > 1) {
      chars.splice(1, count-1, ...count.toString().split(''));           
  }
  
  return chars.length;
};

console.log(compress(["a","a","b","b","c","c","c"]));                          // 6
console.log(compress(["a"]));                                                  // 1
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));  // 4
