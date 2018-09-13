/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false typeof data === 'object' && typeof data.constructor === Object
 * Object.prototype.toString.call(data) === "object Object"
 */
const isObject = data => {
  if (data !== null && Object.prototype.toString.call(data) === "[object Object]"){
    return true;
  } else {
    return false;
  };
  /* your logic here...*/
};

export default isObject;
