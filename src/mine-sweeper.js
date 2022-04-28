const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

 function minesweeper(matrix) {
  const resultArr = [];
  const xLength = matrix.length;
  const yLength = matrix[0].length;

  for (let i = 0; i < xLength; i++) {
    const rowArr = [];
    for (let j = 0; j < yLength; j++) {
      let countMines = 0;
      if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1]) {
        countMines += 1;
      }

      if (i - 1 >= 0 && matrix[i - 1][j]) {
        countMines += 1;
      }

      if (i - 1 >= 0 && j + 1 < yLength && matrix[i - 1][j + 1]) {
        countMines += 1;
      }

      if (j - 1 >= 0 && matrix[i][j - 1]) {
        countMines += 1;
      } 

      if (j + 1 < yLength && matrix[i][j + 1]) {
        countMines += 1;
      } 

      if (i + 1 < xLength && j - 1 >= 0 && matrix[i + 1][j - 1]) {
        countMines += 1;
      } 

      if (i + 1 < xLength && matrix[i + 1][j]) {
        countMines += 1;
      } 
      
      if (i + 1 < xLength && j + 1 < yLength && matrix[i + 1][j + 1]) {
        countMines += 1;
      } 
      rowArr.push(countMines)
    }
    resultArr.push(rowArr)
  }
  return resultArr 
}

module.exports = {
  minesweeper
};
