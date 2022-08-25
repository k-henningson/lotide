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

// Returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  //Do the objects have the same number of keys?
  const obj1keys = Object.keys(object1);
  const obj2keys = Object.keys(object2);
  if (obj1keys.length !== obj2keys.length) {
    return false;
  }
  //Are the values of each key in object1 the same as object2 values
  //Loop through Object.keys array to pull each key 
  for (const key of obj1keys) {
    const val1 = object1[key];
    const val2 = object2[key];
    //Use Array.isArray against both values to see if array comparisons need to be made 
    //If both values arrays - pass to eqArrays
    if (Array.isArray(val1) && Array.isArray(val2)) {
      return eqArrays(val1, val2);
    }
    //Otherwise else assume primitives and continue to compare the two values 
    //Compare both objects' values
    if (val1 !== val2) {
      return false;
    }
  }
  //Objects are the same return true
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

eqObjects(ab, ba); // => true
eqObjects(ab, abc); // => false
eqObjects(cd, dc); // => true
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);