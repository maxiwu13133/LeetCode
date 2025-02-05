/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let start = 0;
  let end = 0;

  while(end < nums.length) {
    if (nums[end++] === 0) {
      k--;
    }

    if (k < 0) {
      if (nums[start++] === 0) {
        k++;
      }
    }
  }

  return end - start;
};

console.log(longestOnes(nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2));                  // 6
console.log(longestOnes(nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3));  // 10