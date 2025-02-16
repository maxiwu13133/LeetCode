/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
  const n = A.length;
  const common = {};
  const prefix = [];

  for (let i = 0; i < n; i++) {
    common[A[i]] = common[A[i]] + 1 || 1;
    common[B[i]] = common[B[i]] + 1 || 1;

    let values = Object.values(common);
    prefix[i] = values.reduce((count, val) => val === 2 ? ++count : count, 0);
  }

  return prefix;
};

console.log(findThePrefixCommonArray(A = [1,3,2,4], B = [3,1,2,4]));  // [0,2,3,4]
console.log(findThePrefixCommonArray(A = [2,3,1], B = [3,1,2]));      // [0,1,3]
