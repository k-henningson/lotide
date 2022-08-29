const findKeyByValue = function(obj, value) {
  //Result will be first key that matches value
  //Search obj keys *use Object.keys function
  let objectKeys = Object.keys(obj);
  //console.log('Keys', objectKeys);
  //Use for of to loop over keys returned by Object.keys
  for (const key of objectKeys) {
    //Check if key/value pair matches value parameter
    //console.log('key', key);
    //console.log('keyvalue', obj[key]);
    if (value === obj[key]) {
      console.log('value of key', obj[key]);
      return key;
    }
  }
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);