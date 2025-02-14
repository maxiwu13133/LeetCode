/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const seen = [];
  const sneaky = [];

  for (let i = 0; i < nums.length; i++) {
    if (sneaky.length === 2) return sneaky;

    if (!seen.includes(nums[i])) {
      seen.push(nums[i]);
    } else {
      sneaky.push(nums[i]);
    }
  };
  return sneaky;
}

console.log(getSneakyNumbers(nums = [0, 1, 1, 0]));                          // [0,1]
console.log(getSneakyNumbers(nums = [0, 3, 2, 1, 3, 2]));                    // [2,3]
console.log(getSneakyNumbers(nums = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]));  // [4,5]