/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const tracker = {};

  for (let i = 0; i < nums.length; i++) {
    if (Object.hasOwn(tracker, nums[i])) {
      return [tracker[nums[i]], i];
    } else {
      tracker[target - nums[i]] = i;
    }
  }
}

console.log(twoSum(nums = [2,7,11,15], target = 9));  // [0,1]
console.log(twoSum(nums = [3,2,4], target = 6));      // [1,2]
console.log(twoSum(nums = [3,3], target = 6));        // [0,1]