/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let operations = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 3 !== 0) {
        operations += 1;
      }
    }

    return operations;
};

const nums1 = [1,2,3,4];
const nums2 = [3,6,9];

console.log(minimumOperations(nums1));
console.log(minimumOperations(nums2));