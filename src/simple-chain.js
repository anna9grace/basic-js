const CustomError = require("../extensions/custom-error");

let strArr = [];

const chainMaker = {
  getLength() {
    return strArr.length;
  },
  addLink(value) {
    const link = `${value}` ? value : '';
    strArr.push(`( ${link} )`)
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || isNaN(position) || Math.round(position) !== position || !strArr[position - 1]) {
      strArr = new Array();
      throw new Error('некорректная позиция')
    }
    strArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    strArr.reverse();
    return this;
  },
  finishChain() {
    const finalStr = strArr.slice();
    strArr = new Array();
    return finalStr.join('~~');
  }
};

module.exports = chainMaker;
