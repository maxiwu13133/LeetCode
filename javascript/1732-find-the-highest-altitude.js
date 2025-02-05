/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let largest = -Infinity;
  let start = 0;
  gain.unshift(0);

  for (let i = 0; i < gain.length; i++) {
    start += gain[i];
    largest = Math.max(largest, start);
    console.log(start);
  }
  
  return largest;
};

console.log(largestAltitude(gain = [-5,1,5,0,-7]));        // 1
console.log(largestAltitude(gain = [-4,-3,-2,-1,4,3,2]));  // 0
