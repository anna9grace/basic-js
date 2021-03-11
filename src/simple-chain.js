const CustomError = require("../extensions/custom-error");

let strArr = [];

const chainMaker = {
  getLength() {
    return strArr.length;
  },
  addLink(value) {
    const link = `${value}` ? value : '';
    strArr.push(`( ${link} )`)
    return chainMaker;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || isNaN(position) || Math.round(position) !== position || !strArr[position - 1]) {
      throw new Error('некорректная позиция')
    }
    strArr.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    strArr.reverse();
    return chainMaker;
  },
  finishChain() {
    const finalStr = strArr.slice();
    strArr = new Array();
    return finalStr.join('~~');
  }
};

module.exports = chainMaker;
