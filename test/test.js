const assert = require('assert');
const expect = require('chai');
const board = require('../src/board.js');
// import board from '../src/board.js';

describe('should display game board', () => {
  it('should display original game board', () => {
    assert.equal(board.display(),
      "1|2|3\n" +
      "-----\n" +
      "4|5|6\n" +
      "-----\n" +
      "7|8|9");
  });
})
