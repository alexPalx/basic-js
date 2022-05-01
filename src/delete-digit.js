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
function deleteDigit(number) {
  const numberString = number.toString();
  let max = 0;
  for (let d = 0; d < numberString.length; ++d) {
    max = Math.max(max, numberString.split('').filter((_, i) => i !== d).join(''));
  }
  return max;
}

module.exports = {
  deleteDigit
};
