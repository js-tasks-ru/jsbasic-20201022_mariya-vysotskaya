/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  if (str !=''){
    str = str[0].toUpperCase() + str.slice(1);
    return str;
  } else return str;
}
