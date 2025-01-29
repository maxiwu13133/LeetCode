/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {

  const frequency = nums.reduce((count, x) => {
    const num = x.toString();
    count[num] = ++count[num] || 1
    return count;
  }, {});

  let total = 0;
  for (const entry of Object.entries(frequency)) {
    total += (entry[1] * (entry[1] - 1)) / 2;
  }

  return total;
};

const nums1 = [1, 2, 3, 1, 1, 3];   // 4
const nums2 = [1, 1, 1, 1];         // 6
const nums3 = [1, 2, 3];            // 0

console.log(numIdenticalPairs(nums1));
console.log(numIdenticalPairs(nums2));
console.log(numIdenticalPairs(nums3));