/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) count++;
  }

  return count;
};

console.log(numJewelsInStones(jewels = "aA", stones = "aAAbbbb"));  // 3
console.log(numJewelsInStones(jewels = "z", stones = "ZZ"));        // 0