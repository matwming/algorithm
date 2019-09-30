/**
|--------------------------------------------------
| Question: Given an array of integers, 
|           return indices of the two numbers such that they add up to a specific target.
|--------------------------------------------------
*/
const nums = [2, 7, 11, 15];
const target = 9; //should return [0,1]

/**
|--------------------------------------------------
| Method 1:
|--------------------------------------------------
*/
const removeDuplicate = array => {
  array.sort((a, b) => a - b);
  array.forEach((el, index) => {
    if (array[index] === array[index + 1]) {
      array.splice(index, 1);
    }
  });
  return array;
};
const twoSum = (nums, target) => {
  let first = "";
  let sortNums = removeDuplicate([...nums]);
  for (let i = 0; i < sortNums.length; i++) {
    if (nums.includes(target - sortNums[i])) {
      first = sortNums[i];
      break;
    }
  }
  let second = target - first;
  let secondIndex = nums.lastIndexOf(second);
  let firstIndex = nums.findIndex(el => el === first);

  return [firstIndex, secondIndex];
};
console.log(twoSum(nums, target));
/**
|--------------------------------------------------
| Method 2:
|--------------------------------------------------
*/
const twoSum_v2 = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const otherIndex = map.get(target - nums[i]);
    if (otherIndex !== undefined) return [otherIndex, i];
    map.set(nums[i], i);
    console.log("map", map);
  }
};
twoSum_v2(nums, target);
