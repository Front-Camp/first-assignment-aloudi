/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let filterdArr = arr.filter((a) => {
    if (Number(a) && isFinite(a)) { return a; }
  });

  let result = filterdArr[0];
  for (let i = 0; i < filterdArr.length; i++) {
    if( result < filterdArr[i] ){
    	result = filterdArr[i];
    }
  }
  return result;
}

export default max;
