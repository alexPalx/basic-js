const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  //refactor it later
  let array = [...arr];
  for(let i = 0; i < array.length; ++i) {
      if(typeof array[i] === 'string' && array[i].startsWith('--')) {
          if(array[i] === '--discard-prev') { array[i] = null; array[i - 1] = null; }
          else if(array[i] === '--discard-next') { array[i] = null; array[i + 1] = null; }
          else if(array[i] === '--double-prev') array[i] = array[i-1];
          else if(array[i] === '--double-next') array[i] = array[i+1];
      }
  }
  return array.filter(item => item);
}

module.exports = {
  transform
};
