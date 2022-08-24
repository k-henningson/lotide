const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Takes in sentence as a string & returns count of letters in sentence
const countLetters = function(sentence) {
//Set empty object for result
  let result = {};
  for (const letter of sentence) {
  //console.log('Letter', letter);
  //Add to result if letter not present & not space
    if (letter === ' ') {
      continue
    }
    if (!result[letter]) {
      result[letter] = 0
    }
    result[letter] ++;
  }
  return result;
};


const result = countLetters('lighthouse in the house');
console.log(result);

assertEqual(result.l, 1);
assertEqual(result[' '], undefined);
assertEqual(result.h, 4);
assertEqual(result.a, undefined);