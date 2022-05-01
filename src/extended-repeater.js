const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(baseString, _options) {
  //refactor it later
  const repeatTimes = _options.repeatTimes || 0;
  const separator = _options.hasOwnProperty('separator') ? String(_options.separator) : '+';
  const addition = _options.hasOwnProperty('addition') ? String(_options.addition) : '';
  const additionRepeatTimes = _options.additionRepeatTimes || 0;
  const additionSeparator = _options.hasOwnProperty('additionSeparator') ? String(_options.additionSeparator) : '|';
  let options = {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  };
  const repeat = (string, times, separator) => {
    let result = string;
    for (let i = 1; i < times; ++i) {
      result += separator + string;
    }
    return result;
  };
  let resultString = baseString;
  for (let i = 1; i < options.repeatTimes; ++i) {
    resultString += repeat(options.addition, options.additionRepeatTimes, options.additionSeparator) + options.separator + baseString;
  }
  resultString += repeat(options.addition, options.additionRepeatTimes, options.additionSeparator);
  return resultString;
}

module.exports = {
  repeater
};
