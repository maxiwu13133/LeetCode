/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  const [year, month, day] = date.split("-");
  return parseInt(year).toString(2) + "-" + parseInt(month).toString(2) + "-" + parseInt(day).toString(2);
};

console.log(convertDateToBinary(date = "2080-02-29"));  // 100000100000-10-11101
console.log(convertDateToBinary(date = "1900-01-01"));  // 11101101100-1-1