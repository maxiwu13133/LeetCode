/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let start = 0;
  let end = 0;
  let k = 1;

  while (end < nums.length) {
    if (nums[end++] === 0) {
      k--;
    }

    if (k < 0) {
      if (nums[start++] === 0){
        k++
      }
    }
  }

  return end - start - 1;

};

console.log(longestSubarray(nums = [1,1,0,1]));            // 3
console.log(longestSubarray(nums = [0,1,1,1,0,1,1,0,1]));  // 5
console.log(longestSubarray(nums = [1,1,1]));              // 2
