const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // Importing inspect function from 'util' to print entire object not just say 'object'
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

//eqObjects(ab, ba); // => true
//eqObjects(ab, abc); // => false
//eqObjects(cd, dc); // => true
//eqObjects(cd, cd2); // => false

//assertEqual(eqObjects(ab, ba), true);
//assertEqual(eqObjects(ab, abc), false);
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);

// assertObjectsEqual(ab, ba); // => true
// assertObjectsEqual(ab, abc); // => false
// assertObjectsEqual(cd, dc); // => true
// assertObjectsEqual(cd, cd2); // => false