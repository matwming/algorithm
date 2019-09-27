/**
|--------------------------------------------------
| Question: Given a non-empty array of integers, 
|           every element appears twice except for one. Find that single one.
|--------------------------------------------------
*/

const nums = [4, 1, 2, 1, 2];

/**
|--------------------------------------------------
| Method 1:
|--------------------------------------------------
*/
const reducer = (a, b) => a + b;
const removeDuplicate = array => {
 array.sort((a, b) => a - b);
 array.forEach((el, index) => {
  if (array[index] === array[index + 1]) {
   array.splice(index, 1);
  }
 });
 const sumResult = array.reduce(reducer);
 return sumResult;
};
const findSingleElement = array => {
 const originalSum = array.reduce(reducer);
 const element = removeDuplicate(array) * 2 - originalSum;
 return element;
};
console.log(findSingleElement(nums));
