// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns empty array when middle.length is less than 2", () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it("returns [2] when passed [1, 2, 3]", () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert.deepEqual(actual, expected);
  });

  it("returns [3, 4] when passed [1, 2, 3, 4, 5, 6]", () => {
    const actual = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3, 4];
    assert.deepEqual(actual, expected);
  });

  it("returns [2, 3] when passed [1, 2, 3, 4]", () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3]
    assert.deepEqual(actual, expected);
  })
});

// assertArraysEqual(middle([1]), []); // => PASS 
// assertArraysEqual(middle([1, 2, 3]), [2]); // => PASS 
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => PASS
// assertArraysEqual(middle([1, 2, 3, 4]), [2]); // => FAIL