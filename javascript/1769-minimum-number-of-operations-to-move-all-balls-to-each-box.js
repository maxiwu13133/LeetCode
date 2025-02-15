/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const locations = [];
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === "1") locations.push(i);
  }

  const operations = [];
  for (let i = 0; i < boxes.length; i++) {
    let jumps = 0;
    for (let j = 0; j < locations.length; j++) {
      jumps += Math.abs(locations[j] - i);
    }
    operations.push(jumps);
  }

  return operations;
};

console.log(minOperations(boxes = "110"));     // [1,1,3]
console.log(minOperations(boxes = "001011"));  // [11,8,5,4,3,4]