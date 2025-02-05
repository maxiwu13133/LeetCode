/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let iteration = 0;
  
  while(sandwiches > 0 || iteration < sandwiches.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      iteration = 0;
    } else {
      students.push(students[0]);
      students.shift();
      iteration++;
    }
  }
  return iteration;
};

console.log(countStudents(students = [1,1,0,0], sandwiches = [0,1,0,1]));          // 0
console.log(countStudents(students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]));  // 3
