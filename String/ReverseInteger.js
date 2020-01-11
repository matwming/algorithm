/**
|--------------------------------------------------
| Input: ["h","e","l","l","o"]
| Output: ["o","l","l","e","h"]
|--------------------------------------------------
*/
const reverse = value => {
  let newArray = x.toString().split("");
  let sign = "";
  if (newArray[0] === "-") {
    sign = newArray[0];
    let result = Number(
      sign +
        newArray
          .slice(1)
          .reverse()
          .join("")
    );
    if (result < -Math.pow(2, 31)) {
      return 0;
    }
    return result;
  }
  let result = Number(newArray.reverse().join(""));
  if (result > Math.pow(2, 31) - 1) {
    result = 0;
  }
  return result;
};
