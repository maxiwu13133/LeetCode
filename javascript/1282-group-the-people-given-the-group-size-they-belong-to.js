/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const groups = {};
  const result = [];

  for (let i = 0; i < groupSizes.length; i++) {
    if (!groups[groupSizes[i]]) {
      groups[groupSizes[i]] = []
    }
    groups[groupSizes[i]].push(i);
  }

  for (const key of Object.keys(groups)) {
    for (let i = Number(key); i < groups[key].length + 1; i += Number(key)) {
      result.push(groups[key].slice(i - Number(key), i))
    }
  }

  return result;
};

console.log(groupThePeople(groupSizes = [3,3,3,3,3,1,3])); // [[5],[0,1,2],[3,4,6]]
console.log(groupThePeople(groupSizes = [2,1,3,3,3,2]));   // [[1],[0,5],[2,3,4]]