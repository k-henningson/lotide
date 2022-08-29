const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]); // => PASS
// assertArraysEqual(results1, [1, 2, 5, 7, -1]); // => FAIL
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']); // => PASS
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Redwood']); // => FAIL

//EXPECTED OUTPUT
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
