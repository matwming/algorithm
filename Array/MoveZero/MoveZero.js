// test address: https://leetcode-cn.com/problems/move-zeroes/

/* Method 1*/
const moveZeroes = function (nums) {
    let zeroNum = 0;
    while (nums.includes(0)) {
        nums.forEach((el, index) => {
            if (el === 0) {
                zeroNum++;
                nums.splice(index, 1);
            }
        });
    }
    let zeroArray = Array(zeroNum).fill(0);
    nums.push(...zeroArray);
    return nums
};

const moveZeroes2 = (array) => {
    let fast = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[fast++] = array[i]
        }
    }
    for (let i = fast; i < array.length; i++) {
        array[i] = 0;
    }
    return array;
};
const moveZero3=(array)=>{
    let fast=0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]!==0){
            array[fast]=array[i];
            if(i!=fast){
                array[i]=0;
            };
            fast++;
        }
    }
}
