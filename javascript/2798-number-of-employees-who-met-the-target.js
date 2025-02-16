/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  let met = 0;

  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) met++;
  }

  return met;
};

console.log(numberOfEmployeesWhoMetTarget(hours = [0,1,2,3,4], target = 2));  // 3
console.log(numberOfEmployeesWhoMetTarget(hours = [5,1,4,2,2], target = 6));  // 0