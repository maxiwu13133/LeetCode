/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let operations = 0;
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] > k) {
      right--;
    }
    else if (nums[left] + nums[right] < k) {
      left++;
    } else {
      operations += 1;
      left++;
      right--;
    }
  }
  
  return operations;
};

console.log(maxOperations(nums = [1, 2, 3, 4], k = 5));    // 2
console.log(maxOperations(nums = [3, 1, 3, 4, 3], k = 6));  // 1
