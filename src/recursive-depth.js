const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!arr.find((el) => Array.isArray(el))) {
      return 1;
    } else {
      const results = arr.filter((el) => Array.isArray(el)).map((innerEl) => this.calculateDepth(innerEl));
      return Math.max(...results) + 1;
    }
  }
};