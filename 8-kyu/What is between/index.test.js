// Importing the function to be tested
const between = require('.')

// Test cases for the 'between' function

// Test case 1: Testing the function with positive integers
test('Test 1', () => {
  expect(between(1, 4)).toEqual([1, 2, 3, 4])
})

// Test case 2: Testing the function with both positive and negative integers
test('Test 2', () => {
  expect(between(-2, 2)).toEqual([-2, -1, 0, 1, 2])
})
