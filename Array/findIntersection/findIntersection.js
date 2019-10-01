const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(Array.from(new Set(nums2)));

const findIntersection = (nums1, nums2) => {
  const intersection = [];
  let length = nums2.length;
  for (let i = 0; i < length; i++) {
    if (nums2.includes(nums1[i])) {
      intersection.push(nums1[i]);
      nums1.splice(i, 1);
      nums2.splice(nums2.findIndex(a => a == nums1[i]), 1);
      console.log("nums2", nums2);
      console.log("nums1", nums1);
    }
  }
  return intersection;
};

console.log(findIntersection(nums1, nums2));
