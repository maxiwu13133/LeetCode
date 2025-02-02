/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let available = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i - 1] !== 1 && flowerbed[i] !== 1 && flowerbed[i + 1] !== 1) {
      available += 1;
      flowerbed[i] = 1;
    }
  }

  return available >= n;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));  // true 
console.log(canPlaceFlowers([1,0,0,0,1], 2));  // false