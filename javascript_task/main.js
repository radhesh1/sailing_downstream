// main.js

/**
 * Remove items at positions which are a multiple of 2 or 3
 * @param {Array} inputList - List of integers
 * @returns {Array} - Modified list with items removed
 */
function removeMultiples(inputList) {
  return inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
}

/**
 * Process the input list and handle errors
 * @param {Array} inputList - List of integers
 * @returns {Array} - Modified list or error message
 */
function processList(inputList) {
  // Check if the list length is a multiple of 10
  if (inputList.length % 10 !== 0) {
    throw new Error('List length must be a multiple of 10');
  }

  // Remove items at positions which are a multiple of 2 or 3
  const modifiedList = removeMultiples(inputList);
  return modifiedList;
}

module.exports = processList;
