/*
* test address: https://leetcode.com/problems/container-with-most-water/
* */

let input=[1,8,6,2,5,4,8,3,7]

/*
* Method 1:
* */
const getContainer=(array)=>{
    let max=0;
    for (let i = 0; i <array.length-1 ; i++) {
        for (let j = i+1; j <array.length ; j++) {
            let area=(j-i)*Math.min(array[i],array[j]);
            max=Math.max(max,area);
        }
    }
    return max
}
const getContainer2=(input)=>{
    let max=0;
    for (let i = 0,j=input.length-1; i <j;) {
        let minHeight=input[i]<input[j]?input[i++]:input[j--];
        let area=(j-i+1)*minHeight;
        max=Math.max(max,area);
    }
    return max;
}


