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

const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => FAIL

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
