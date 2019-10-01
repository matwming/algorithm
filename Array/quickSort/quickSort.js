let nums = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];
const quickSort = array => {
 if (array.length < 2) {
  return array;
 }
 const pivotIndex = array.length - 1;
 const pivot = array[pivotIndex];
 const left = [];
 const right = [];
 for (let i = 0; i < pivotIndex; i++) {
  const item = array[i];
  item < pivot ? left.push(item) : right.push(item);
 }
 console.log("array", array);
 let result=[...quickSort(left),pivot,...quickSort(right)]
 console.log('result',result);
 return result;
};
quickSort(nums);
