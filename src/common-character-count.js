const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(a, b) {
  const aArr = a.split('');
  const bArr = b.split('');
  let matches = 0;
  aArr.forEach(item => {
    const matchIndex = bArr.findIndex(el => el === item);
    if (matchIndex !== -1) {
      bArr.splice(matchIndex, 1);
      matches++;
    }
  });
  return matches;
}

module.exports = {
  getCommonCharacterCount
};
