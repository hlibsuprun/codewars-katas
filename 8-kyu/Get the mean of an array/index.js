/**
 * Calculates the average of the given array rounded down to its nearest integer.
 *
 * @param {number[]} marks - Array of marks.
 * @returns {number} - The average rounded down to the nearest integer.
 */
const getAverage = (marks) => ~~(marks.reduce((total, value) => total + value, 0) / marks.length)

// Function export
module.exports = getAverage
