/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefix = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i - 1] * prefix[i - 1];
  }

  const suffix = Array(nums.length).fill(1);

  for (let i = nums.length - 2; i >= 0; i--) {
    suffix[i] = nums[i + 1] * suffix[i + 1];
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = suffix[i] * prefix[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));       // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));  // [0,0,9,0,0]