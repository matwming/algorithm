/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/
const nums = [9, 2, 4, 5, 8, 7, 3];
const bubbleSort = array => {
 let swapped = false;
 do {
  swapped = false;
  array.forEach((el, index) => {
   console.log(array);
   if (el > array[index + 1]) {
    let temporary = el;
    array[index] = array[index + 1];
    array[index + 1] = temporary;
    swapped = true;
   }
  });
 } while (swapped);
 return array;
};
bubbleSort(nums);
