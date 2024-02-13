// Importing the function to be tested
const getAverage = require('.')

// Test cases for the 'getAverage' function

// Test case 1: Array with equal marks
test('Test 1', () => {
  expect(getAverage([2, 2, 2, 2])).toBe(2)
})

// Test case 2: Array with increasing marks
test('Test 2', () => {
  expect(getAverage([1, 2, 3, 4, 5])).toBe(3)
})

// Test case 3: Array with majority of marks being the same
test('Test 3', () => {
  expect(getAverage([1, 1, 1, 1, 1, 1, 1, 2])).toBe(1)
})
