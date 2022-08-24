const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
//Do arrays have same length
if (arr1.length !== arr2.length) {
  return false;
}
//Loop over arrays 
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    return false;
  }
}
return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  assertEqual(result, true);
};


// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => should FAIL
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL