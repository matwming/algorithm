/**
|--------------------------------------------------
| remove duplicate elements in an array
|--------------------------------------------------
*/
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
|--------------------------------------------------
| Method 1:
|--------------------------------------------------
*/
const checkDuplicate = array => {
 let checkDuplicateArray = [];
 array.forEach((el, index) => {
  if (array[index] === array[index + 1]) {
   checkDuplicateArray.push(el);
  }
 });
 return checkDuplicateArray.length;
};
const removeDuplicate = array => {
 array.sort((a, b) => a - b);
 array.forEach((el, index) => {
  if (array[index] === array[index + 1]) {
   array.splice(index, 1);
  }
 });
 if (checkDuplicate(array) > 0) {
  removeDuplicate(array);
 }
 return array;
};
console.log(removeDuplicate(nums));

/**
|--------------------------------------------------
| Method 2: using Map
|--------------------------------------------------
*/
const removeDuplicate2 = array => {
 let a1 = new Map();
 for (let el of array) {
  if (a1.has(el)) {
   a1.get(el).val++;
  } else {
   a1.set(el, { val: 1 });
  }
 }
 return Array.from(a1.keys());
};
console.log(removeDuplicate2(nums));
