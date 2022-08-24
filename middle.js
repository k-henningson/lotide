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

  //Middle will return an array with only the middle element(s)
  const middle = function(arr) {
  //New array
  let midArr = [];
  //If array is less than 2 elements, return an empty array
    if (arr.length <= 2) {
      console.log('Less than 2', midArr);
      return midArr;
    }
  //If array odd number elements, return single middle element
    if (arr.length % 2 !== 0) {
      let odd = arr[Math.floor((arr.length -1) / 2)];
      midArr.push(odd);
      console.log('Odd', midArr);
      return midArr;
    }
  //If array even number elements, return two middle elements
    if (arr.length % 2 === 0) {
      let middle1 = arr[Math.floor(arr.length / 2) - 1];
      let middle2 = arr[Math.floor(arr.length / 2)];
      midArr.push(middle1, middle2);
      console.log('Even', midArr);
      return midArr;
    }
  };

  middle([1]); // => []
  middle([1, 2]) // => []

  middle([1, 2, 3]) // => [2]
  middle([1, 2, 3, 4, 5]) // => [3]

  middle([1, 2, 3, 4]) // => [2, 3]
  middle([1, 2, 3, 4, 5, 6]) // => [3, 4]