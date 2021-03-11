const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (date instanceof Date === false) {
    throw new Error('Date is invalid!');
  }

  const month = date.getMonth();

  return month === 11 || month <= 1
    ? 'winter'
    : month < 11 && month >= 8
      ? 'autumn'
      : month < 8 && month >= 5
        ? 'summer'
        : 'spring';
};

