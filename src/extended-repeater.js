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
function repeater(str, options) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  let result = '';
  let resultAddition = '';

  if (separator === undefined) separator = '+';
  if (additionSeparator === undefined) additionSeparator = '|';
  addition = addition !== undefined ? `${addition}` : '';
  str = `${str}`;

  if (additionRepeatTimes === undefined) {
    resultAddition = addition;
  } else {
    for (let i = 1; i <= additionRepeatTimes; i++) {
      resultAddition += i === additionRepeatTimes ? `${addition}` : `${addition}${additionSeparator}`;
    }
  }

  if (repeatTimes === undefined) {
    result = `${str}${resultAddition}`
  } else {
    for (let i = 1; i <= repeatTimes; i++) {
      result += i === repeatTimes ? `${str}${resultAddition}` : `${str}${resultAddition}${separator}`;
    }
  }

  return result;
}

module.exports = {
  repeater
};
