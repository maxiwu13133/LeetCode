/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  let answer1 = new Set(nums1);
  nums2.forEach(num => answer1.delete(num));

  let answer2 = new Set(nums2);
  nums1.forEach(num => answer2.delete(num));

  return [[...answer1], [...answer2]];
};

console.log(findDifference(nums1 = [1,2,3], nums2 = [2,4,6]));      // [[1,3],[4,6]]
console.log(findDifference(nums1 = [1,2,3,3], nums2 = [1,1,2,2]));  // [[3],[]]