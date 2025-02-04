/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j++; 
    }
  }
};

const nums1 = [0,1,0,3,12];
const nums2 = [0];

console.log("Before:");
console.log(nums1);          // [0,1,0,3,12]
console.log(nums2);          // [0]

moveZeroes(nums1);
moveZeroes(nums2);

console.log("After:");
console.log(nums1);          // [1,3,12,0,0]
console.log(nums2);          // [0]

