const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, (word) => word[0]);
// const results2 = map(words, (word) => word[word.length - 1]);
// const results3 = map(words, (word) => word[1]);
// console.log(results1);
// console.log(results2);
// console.log(results3);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // => PASS
// assertArraysEqual(results2, ['d', 'l', 'o', 'r', 'm']); // => PASS
// assertArraysEqual(results3, ['r', 'o', 'o', 'a', 'o']); // => PASS
// assertArraysEqual(results1, ['t', 'm', 't', 'c', 'g']); // => FAIL



