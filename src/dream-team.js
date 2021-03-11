const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(namesArr) {
  return !Array.isArray(namesArr) || namesArr.length === 0
    ? false
    : namesArr.filter((el) => typeof (el) === 'string').map((name) => name.trim()[0].toUpperCase()).sort().join('')
};
