const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  value: [],
  getLength() {
    return this.value.length;
  },
  addLink(value) {
    this.value.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position % 1 !== 0 || position < 1 || position > this.value.length) {
      this.value = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.value.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    const chain = `( ${this.value.join(' )~~( ')} )`;
    this.value = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
