/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let maxValue;
  for (let i = 0; i < arr.lenght; i++) {
    if ((maxValue < arr[i]) && Number.isFinite( Number(arr[i]) )) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

export default max;
