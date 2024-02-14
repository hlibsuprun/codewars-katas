/**
 * Populates an array with numbers from 1 up to and including the given number.
 *
 * @param {number} n - The number of monkeys to count up to.
 * @returns {number[]} - An array containing numbers from 1 to n.
 */
const monkeyCount = (n) => [...new Array(n)].map((_, i) => i + 1)

// Function export
module.exports = monkeyCount
