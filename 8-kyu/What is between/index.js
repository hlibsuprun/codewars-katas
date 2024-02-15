/**
 * Returns an array of all integers between the input parameters (inclusive).
 *
 * @param {number} a - The starting integer.
 * @param {number} b - The ending integer.
 * @returns {number[]} - An array containing all integers between a and b.
 */
const between = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i)

// Function export
module.exports = between
