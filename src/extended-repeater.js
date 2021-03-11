const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  const newStr = [];

  const generateAdditional = () => {
    for (let i = 0; i < additionRepeatTimes; i++) {
      newStr.push(`${addition}`);
      if (i !== additionRepeatTimes - 1) {
        newStr.push(additionSeparator)
      }
    }
  }

  const generateString = () => {
    for (let j = 0; j < repeatTimes; j++) {
      newStr.push(`${str}`);
      generateAdditional();
      if (j !== repeatTimes - 1) {
        newStr.push(separator)
      }
    }
  }

  generateString();
  return newStr.join('');
};
