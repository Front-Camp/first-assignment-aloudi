/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  function truncateStr(str, replacer) {
    let truncatedStr = str.substring(0, str.length - replacer.length) + replacer;
    return truncatedStr;
  }
  if (str.length === 0 || str.length < length) {
    return str;
  } else if (length === 0) {
    return truncateStr(str, replacer);
  } else {
    let stringOfSetLenght = str.substring(0, length);
    return truncateStr(stringOfSetLenght, replacer);
  }
  /* your logic here...*/
};

export default truncate;
