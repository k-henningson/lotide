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

  module.exports = without;

  // const without2 = function(source, itemsToRemove) {
  //   const newArr = source.filter(item => {
  //     if (!itemsToRemove.includes(item)) {
  //       return true
  //     } 
  //   })
  //   return newArr;
  // }

  // console.log(without([1, 2, 3], [1])); // => [2, 3]
  // console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
  // console.log(without(['hello', 'hi', 'hey'], ['hi'])); // => ['hello', 'hey']

//    const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);