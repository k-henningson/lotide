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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word[word.length - 1]);
const results3 = map(words, (word) => word[1]);
console.log(results1);
console.log(results2);
console.log(results3);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // => PASS
assertArraysEqual(results2, ['d', 'l', 'o', 'r', 'm' ]); // => PASS
assertArraysEqual(results3, ['r', 'o', 'o', 'a', 'o']); // => PASS
assertArraysEqual(results1, ['t', 'm', 't', 'c', 'g']); // => FAIL



