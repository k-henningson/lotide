//Middle will return an array with only the middle element(s)
const middle = function(arr) {
  let midArr = [];
  //If array is less than 2 elements, return an empty array
  if (arr.length <= 2) {
    return midArr;
  }
  //If array odd number elements, return single middle element
  if (arr.length % 2 !== 0) {
    let odd = arr[Math.floor((arr.length - 1) / 2)];
    midArr.push(odd);
    return midArr;
  }
  //If array even number elements, return two middle elements
  if (arr.length % 2 === 0) {
    let middle1 = arr[Math.floor(arr.length / 2) - 1];
    let middle2 = arr[Math.floor(arr.length / 2)];
    midArr.push(middle1, middle2);
    return midArr;
  }
};

module.exports = middle;

// middle([1]); // => []
// middle([1, 2]); // => []

// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]

// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
