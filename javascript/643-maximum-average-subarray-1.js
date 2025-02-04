/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let windowSum = nums.slice(0, k).reduce((sum, num) => sum + num, 0);

  let maxAverage = windowSum;
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    maxAverage = Math.max(windowSum, maxAverage);
  }

  return maxAverage / k;
}

console.log(findMaxAverage(nums = [1,12,-5,-6,50,3], k = 4));  // 12.75000
console.log(findMaxAverage(nums = [5], k = 1));                // 5.00000
