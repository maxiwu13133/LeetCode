/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0;
  const len = accounts[0].length;
  for (let i = 0; i < accounts.length; i++) {
    let total = 0;
    for (let j = 0; j < len; j++) {
      total += accounts[i][j];
    }
    if (total > max) max = total;
  }
  return max;
};

console.log(maximumWealth(accounts = [[1,2,3],[3,2,1]]));          // 6
console.log(maximumWealth(accounts = [[1,5],[7,3],[3,5]]));        // 10
console.log(maximumWealth(accounts = [[2,8,7],[7,1,3],[1,9,5]]));  // 17
