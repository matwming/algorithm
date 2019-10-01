/**
|--------------------------------------------------
| Question: Given an array of integers, 
|           return indices of the two numbers such that they add up to a specific target.
|--------------------------------------------------
*/
const nums = [3, 2, 3];
const target = 6; //should return [0,1]

const twoSum = (nums, target) => {
 let first = "";
 let second = "";
 for (let i = 0; i < nums.length; i++) {
  if (nums.includes(Math.abs(target - nums[i]))) {
   first = nums[i];
   second = Math.abs(target - first);
  }
 }
 if (first > second) {
  first = second;
  second = Math.abs(target - first);
 }
 let firstIndex = nums.findIndex(el => el == first);
 nums.splice(firstIndex, 1);
 let secondIndex = nums.findIndex(el => el === second);
 secondIndex++;
 return [firstIndex, secondIndex];
};
console.log(twoSum(nums, target));
