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

  const without = function(source, itemsToRemove) {
    //Establish new array
    let newArr = [];
    //If source arr & items arr !== length then run lines 32-40
    if (source.length !== itemsToRemove.length) {
    //Compare two arrays
    for (let i = 0; i < source.length; i++) { 
      for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        // console.log("source[i]", source[i]);
        // console.log("itemsToRemove", itemsToRemove[i]);
        newArr.push(source[i]);
      }
    }
    }
  } else {
    for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[i]) {
      newArr.push(source[i]);
    }
  }
  }
    //console.log(newArr);
    return newArr;
  }

  console.log(without([1, 2, 3], [1])); // => [2, 3]
  console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
  console.log(without(['hello', 'hi', 'hey'], ['hi'])); // => ['hello', 'hey']

//    const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);