//Return all indices in string where each character is found
const letterPositions = function(sentence) {
  const result = {};
  //Loop through indices of letter in sentence
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (!result[letter]) {
        result[letter] = [];
      }
      //Put letter into result object as key, and push i which is the indices for the value
      result[letter].push(i);
    }
  }
  //console.log(result);
  return result;
};

module.exports = letterPositions;



// letterPositions('lighthouse in the house');
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("kyra").k, [0]);
// assertArraysEqual(letterPositions("this will not work").w, [0]);


//EXPECTED RESULT
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
