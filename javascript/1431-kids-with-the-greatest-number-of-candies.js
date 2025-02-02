/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const result = [];
  const greatestCandies = candies.reduce((acc, kid) => kid > acc ? kid : acc , 0);

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= greatestCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));  // [true,true,true,false,true]
console.log(kidsWithCandies([4,2,1,1,2], 1));  // [true,false,false,false,false]
console.log(kidsWithCandies([12,1,12], 10));   // [true,false,true]