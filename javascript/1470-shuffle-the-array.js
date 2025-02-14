/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(nums[i]);
    ans.push(nums[i + n]);
  }
  return ans;
};

console.log(shuffle(nums = [2,5,1,3,4,7], n = 3));      // [2,3,5,4,1,7] 
console.log(shuffle(nums = [1,2,3,4,4,3,2,1], n = 4));  // [1,4,2,3,3,2,4,1]
console.log(shuffle(nums = [1,1,2,2], n = 2));          // [1,2,1,2]
