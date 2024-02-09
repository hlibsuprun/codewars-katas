/**
 * Calculates the number of litres of water Nathan will drink while cycling.
 * Nathan drinks 0.5 litres of water per hour of cycling.
 *
 * @param {number} time - The time spent cycling in hours.
 * @returns {number} - The number of litres Nathan will drink, rounded down to the nearest integer.
 */
const litres = (time) => Math.floor(time * 0.5)

// Function export
module.exports = litres
