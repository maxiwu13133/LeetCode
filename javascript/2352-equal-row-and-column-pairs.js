/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  const rows = {};

  for (let i = 0; i < grid.length; i++) {
    rows["row" + i] = JSON.stringify(grid[i]);
  }

  const cols = {};
  for (let i = 0; i < grid.length; i++) {
    let col = "["
    for (let j = 0; j < grid.length; j++) {
      col += JSON.stringify(grid[j][i]) + ","
    }
    col = col.substring(0, col.length - 1) + "]"
    cols["col" + i] = col;
  }

  const colsVals = Object.values(cols);
  const rowsVals = Object.values(rows);

  const colsFreq = {};
  const rowsFreq = {};

  for (let i = 0; i < colsVals.length; i++) {
    colsFreq[colsVals[i]] = (colsFreq[colsVals[i]] + 1) || 1;
    rowsFreq[rowsVals[i]] = (rowsFreq[rowsVals[i]] + 1) || 1;
  }

  const colsKeys = Object.keys(colsFreq);
  const rowsKeys = Object.keys(rowsFreq);
  let count = 0;
  for (let i = 0; i < colsKeys.length; i++) {
    if (rowsKeys.includes(colsKeys[i])) {
      count += rowsFreq[colsKeys[i]] * colsFreq[colsKeys[i]]
    }
  }

  return count;
};

console.log(equalPairs(grid = [[3,2,1],[1,7,6],[2,7,7]]));                  // 1
console.log(equalPairs(grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));  // 3
