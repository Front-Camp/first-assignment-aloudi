/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  let result = arr
    .filter((a) => {
      if (isFinite(parseFloat(a))) {
        return a;
      }
    })

    .map((a) => {
      if (Number(a)) {
        return Number(a);
      } else {
        return parseFloat(a);
      }
    })

    .reduce((a, b) => {
      return a + b;
    });

  return result;
};

export default sumElements;
