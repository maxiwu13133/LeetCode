/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.map(num => nums[num]);
};

console.log(buildArray([0,2,1,5,3,4]));
console.log(buildArray([5,0,1,2,3,4]));