// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for result.length", () => {
    const actual = tail(['Hello', 'Lighthouse', 'Labs']);
    assert.strictEqual(actual.length, 2);
  });

  it("returns 'Lighthouse' and 'Labs' for result[0] result[1]", () => {
    const actual = tail(['Hello', 'Lighthouse', 'Labs']);
    const expected = ['Lighthouse', 'Labs'];
    assert.strictEqual(actual[0], expected[0]);
    assert.strictEqual(actual[1], expected[1]);
  });

  it("returns 'Lighthouse Labs' for tail", () => {
    const actual = tail(['Hello', 'Lighthouse', 'Labs']);
    const expected = ['Lighthouse', 'Labs'];
    assert.deepEqual(actual, expected);
  });
});

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"