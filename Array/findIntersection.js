/**
|--------------------------------------------------
| Question: Given two arrays, write a function to compute their intersection.
|--------------------------------------------------
*/
const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];
//expected output [2,2]

const intersect = (nums1, nums2) => {
  let commonNum = [];
  let newArray = [...nums1, ...nums2];
  let a = new Map();
  for (let i = 0; i < newArray.length; i++) {
    if (a.get(i)) {
    }
  }
};
console.log(intersect(nums1, nums2));
