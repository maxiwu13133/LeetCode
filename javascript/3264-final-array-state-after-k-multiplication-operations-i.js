/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    let min = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }
    nums[min] *= multiplier;
  }
  return nums;
};

console.log(getFinalState(nums = [2,1,3,5,6], k = 5, multiplier = 2));  // [8,4,6,5,6]
console.log(getFinalState(nums = [1,2], k = 3, multiplier = 4));        // [16,8]