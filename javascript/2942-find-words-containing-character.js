/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
  const indices = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) indices.push(i);
  }

  return indices;
};

console.log(findWordsContaining(words = ["leet","code"], x = "e"));             // [0,1]
console.log(findWordsContaining(words = ["abc","bcd","aaaa","cbc"], x = "a"));  // [0,2]
console.log(findWordsContaining(words = ["abc","bcd","aaaa","cbc"], x = "z"));  // []
