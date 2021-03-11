const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


module.exports = function dateSample(sample) {
  return typeof (sample) !== "string" || isNaN(sample) || +sample > MODERN_ACTIVITY || !sample || +sample <= 0
    ? false
    : Math.ceil((Math.log(MODERN_ACTIVITY / +sample)) / (0.693 / HALF_LIFE_PERIOD))
};
