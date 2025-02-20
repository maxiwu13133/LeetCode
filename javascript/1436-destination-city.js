/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const targets = {};
  const cities = [];

  for (let i = 0; i < paths.length; i++) {
    targets[paths[i][0]] = paths[i][1];
    cities.push(paths[i][1]);
  }

  const keys = Object.keys(targets);

  for (let i = 0; i < cities.length; i++) {
    if (!keys.includes(cities[i])) return cities[i];
  }
};

console.log(destCity(paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));  // "Sao Paulo"
console.log(destCity(paths = [["B","C"],["D","B"],["C","A"]]));  // "A"
console.log(destCity(paths = [["A","Z"]]));  // "Z"