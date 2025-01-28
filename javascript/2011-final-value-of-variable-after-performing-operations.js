/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((result, operation) => operation.includes("+") ? ++result : --result, 0);
};

console.log(finalValueAfterOperations(["--X","X++","X++"]));
console.log(finalValueAfterOperations(["++X","++X","X++"]));