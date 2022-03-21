const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const strN = `${n}`;

  if (strN[0] < strN[1]) {
    return +strN.slice(1);
  }

  const minDigit = strN.split('').sort()[0];
  const idxMinDigit = strN.indexOf(minDigit);

  return +`${strN.slice(0, idxMinDigit)}${strN.slice(idxMinDigit + 1)}`
}

module.exports = {
  deleteDigit
};
