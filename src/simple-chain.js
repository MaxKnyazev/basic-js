const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  resultValues: [],
  getLength() {
    return this.resultValues.length;
  },

  addLink(value) {
    this.resultValues.push(String(value));
    return this;
  },

  removeLink(position) {
    if (this.resultValues[position - 1] === undefined) {
      this.resultValues = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.resultValues.splice(position - 1, 1)
    return this;
  },

  reverseChain() {
    this.resultValues.reverse();
    return this;
  },

  finishChain() {
    let resultChain = this.resultValues.map(elem => `( ${elem} )`).join('~~');
    this.resultValues = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
