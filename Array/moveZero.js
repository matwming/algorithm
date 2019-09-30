/**
|--------------------------------------------------
| Question: Given an array nums, write a function to move all 0's to the end of it,
            while maintaining the relative order of the non-zero elements.
|--------------------------------------------------
*/
const nums = [1, 0, 0, 1]; //Expected Output: [1,1,0,0];

/**
|--------------------------------------------------
| Method 1: 
|--------------------------------------------------
*/
const moveZeroes = nums => {
  let zeroArray = [];
  if (nums.includes(0)) {
    nums.forEach((el, index) => {
      if (el === 0) {
        nums.splice(index, 1);
        zeroArray.push(0);
      }
    });
    moveZeroes(nums);
  }
  nums.push(...zeroArray);
  return nums;
};

console.log(moveZeroes(nums));
/**
|--------------------------------------------------
| Method 2:
|--------------------------------------------------
*/
const moveZeroes_v2 = function(nums) {
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[temp] === 0) {
      nums.splice(temp, 1);
      nums[nums.length] = 0;
    } else {
      temp++;
    }
  }
};
