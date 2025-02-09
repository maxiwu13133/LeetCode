/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const occurences = {};

  for (let i = 0; i < arr.length; i++) {
    occurences[arr[i]] = (occurences[arr[i]] + 1) || 1;
  }

  const values = Object.values(occurences);
  const unique = new Set(values);

  return values.length === [...unique].length;
};

console.log(uniqueOccurrences(arr = [1,2,2,1,1,3]));              // true
console.log(uniqueOccurrences(arr = [1,2]));                      // false
console.log(uniqueOccurrences(arr = [-3,0,1,-3,1,1,1,-3,10,0]));  // true
