const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matr) {
  let number = 0;

  matr.forEach((sub) => {
    number += sub.reduce((acc, el) => el === '^^' ? acc += 1 : acc += 0, 0)
  })

  return number;
};
