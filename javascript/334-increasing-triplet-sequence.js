/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let small = Infinity;
  let big = Infinity;

  for (const n of nums) {
    if (n <= small) small = n;
    else if (n <= big) big = n;
    else return true;
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));     // true
console.log(increasingTriplet([5, 4, 3, 2, 1]));     // false 
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));  // true 