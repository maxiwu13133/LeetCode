/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let area = 0;
  let [left, right] = [0, height.length - 1];

  while (left < right) {
    let newArea = (right - left) * Math.min(height[left], height[right]);

    if (newArea >= area) area = newArea;

    height[left] < height[right] ? left++ : right--;
  }

  return area;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));  // 49
console.log(maxArea([1,1]));                // 1
