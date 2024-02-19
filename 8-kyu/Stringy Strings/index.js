/**
 * Generates a string of alternating 1s and 0s based on the given size.
 * The string starts with 1.
 *
 * @param {number} size - The size of the string to be generated.
 * @returns {string} - The string of alternating 1s and 0s.
 */
const stringy = (size) => [...new Array(size)].map((element, i) => (i % 2 === 0 ? 1 : 0)).join('')

// Function export
module.exports = stringy
