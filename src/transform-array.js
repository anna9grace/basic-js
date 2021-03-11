const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = null;
  if (!Array.isArray(arr)) {
    throw new Error('arr is not an Array');
  }

  const transformFuncs = {
    '--discard-next': (i, prevI) => {
      if (newArr[i] && newArr[i] === arr[prevI + 1]) {
        newArr.splice(i, 1);
      }
    },
    '--discard-prev': (i, prevI) => {
      if (newArr[i - 1] && newArr[i - 1] === arr[prevI - 1]) {
        newArr.splice(i - 1, 1);
      }
    },
    '--double-next': (i, prevI) => {
      if (newArr[i] && newArr[i] === arr[prevI + 1]) {
        newArr.splice(i, 1, newArr[i], newArr[i]);
      }
    },
    '--double-prev': (i, prevI) => {
      if (newArr[i - 1] && newArr[i - 1] === arr[prevI - 1]) {
        newArr.splice(i - 1, 1, newArr[i - 1], newArr[i - 1]);
      }
    },
  }

  arr.forEach((el, index, arr) => {
    if (typeof (el) === "string" && transformFuncs[el]) {
      if (newArr === null) {
        newArr = arr.slice();
      }
      const i = newArr.indexOf(el);
      newArr.splice(i, 1);
      transformFuncs[el](i, index);
    }
  })
  return newArr === null ? arr : newArr;
}
