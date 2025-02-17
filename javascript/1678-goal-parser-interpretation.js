/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  const parser = {"G": "G", "()": "o", "(al)": "al"}
  let current = "";
  let result = "";

  for (let i = 0; i < command.length; i++) {
    current += command[i];
    
    if (current === "G" || current === "()" || current === "(al)") {
      result += parser[current];
      current = ""
    }
  }

  return result;
};

console.log(interpret(command = "G()(al)"));         // Goal
console.log(interpret(command = "G()()()()(al)"));   // Gooooal
console.log(interpret(command = "(al)G(al)()()G"));  // alGalooG