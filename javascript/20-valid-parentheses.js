/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const open = ["(", "[", "{"];

  for (const char of s) {
    if (open.includes(char)) stack.push(char)
    else if (char === ")") {
      if (stack.pop() !== "(") return false;
    } else if (char === "]") {
      if (stack.pop() !== "[") return false;
    } else if (char === "}") {
      if (stack.pop() !== "{") return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid(s = "()"));      // true
console.log(isValid(s = "()[]{}"));  // true
console.log(isValid(s = "(]"));      // false 
console.log(isValid(s = "([])"));    // true
