/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  let modifiedStr = "";
  if (typeof str !== "string") {
    throw new Error("this is not a string");
  } else {
    for (let i = 1; i <= str.length; i++) {
      modifiedStr += str[(str.length - i)];
    }
    return modifiedStr;
  }
};

export default turnMeBaby;
