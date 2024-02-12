/**
 * Reverses all the words within the string passed in.
 * Words are separated by exactly one space and there are no leading or trailing spaces.
 *
 * @param {string} str - The input string containing words separated by spaces.
 * @returns {string} - The string with reversed words.
 */
const reverseWords = (str) => str.split(' ').reverse().join(' ')

// Function export
module.exports = reverseWords
