/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const sum = nums.reduce((total, num) => total + num);
  let current = sum;

  for (let i = 0; i < nums.length; i++) {
    if (current - nums[i] === (sum - nums[i]) / 2) {
      return i;
    }
    current -= nums[i];
  }

  return -1;
};

console.log(pivotIndex(nums = [1,7,3,6,5,6]));  // 3
console.log(pivotIndex(nums = [1,2,3]));        // -1
console.log(pivotIndex(nums = [2,1,-1]));       // 0
