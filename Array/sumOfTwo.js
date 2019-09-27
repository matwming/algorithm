/**
|--------------------------------------------------
| Question: Given an array of integers, 
|           return indices of the two numbers such that they add up to a specific target.
|--------------------------------------------------
*/
const nums = [2, 7, 11, 15];
const target = 9; //should return [0,1]

const twoSum = array => {
 const copiedNums = [...array];
 copiedNums.sort((a, b) => a - b);
 let bigNum = [];
 nums.forEach((el, index) => {
  if (el > target) {
   bigNum.push(el);
  }
 });
 let bigNumIndex = copiedNums.findIndex((el, index) => {
  el === bigNum[0];
 });
 let arrayArea = copiedNums.slice(0, bigNumIndex - 1);
 console.log(arrayArea);
};
twoSum(nums);
