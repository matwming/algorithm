/*
* test: https://leetcode-cn.com/problems/3sum/
* */

/*
* Method 1: 3 for loop
* */
const get=(nums)=>{
    let array=[]
    for (let i = 0; i < nums.length-2; i++) {
        for (let j = i+1; j <nums.length-1 ; j++) {
            for (let k = j+1; k <nums.length ; k++) {
                if(nums[i]+nums[j]+nums[k]==0) {
                    array.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
    return array;
}
/*
* Method 2: two points=>
* */
