/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  const letters = n.split("");
  return Math.max(...letters);
};

console.log(minPartitions(n = "32"));                    // 3
console.log(minPartitions(n = "82734"));                 // 8
console.log(minPartitions(n = "27346209830709182346"));  // 9
