/**
|--------------------------------------------------
| Question: Given an array of integers, 
|            find if the array contains any duplicates.
|--------------------------------------------------
*/
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const containDuplicate = array => {
 let a1 = new Map();
 for (let el of array) {
  if (a1.has(el)) {
   a1.get(el).val++;
  } else {
   a1.set(el, { val: 1 });
  }
 }
 let resultArray = Array.from(a1.values());
 return resultArray.some(el => el.val > 1);
};
console.log(containDuplicate(nums));

/**
|--------------------------------------------------
| Method 2: enhanced
|--------------------------------------------------
*/

var containsDuplicate = function(nums) {
 let map = new Map();
 for (let i = 0; i < nums.length; i++) {
  if (map.has(nums[i])) return true;
  map.set(nums[i], i);
 }
 return false;
};
