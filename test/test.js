const assert = require('assert');
const expect = require('chai');
const board = require('../src/board.js');

describe('should display game board', () => {
  it('should display original game board', () => {
    assert.equal( board(),
      "1|2|3\n" +
      "-----\n" +
      "4|5|6\n" +
      "-----\n" +
      "7|8|9");
  });
})
