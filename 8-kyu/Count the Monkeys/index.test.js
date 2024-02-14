// Importing the function to be tested
const monkeyCount = require('.')

// Test cases for the 'monkeyCount' function

// Test case 1: Testing with input 5
test('Test 1', () => {
  expect(monkeyCount(5)).toEqual([1, 2, 3, 4, 5])
})

// Test case 2: Testing with input 3
test('Test 2', () => {
  expect(monkeyCount(3)).toEqual([1, 2, 3])
})

// Test case 3: Testing with input 9
test('Test 3', () => {
  expect(monkeyCount(9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

// Test case 4: Testing with input 10
test('Test 4', () => {
  expect(monkeyCount(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

// Test case 5: Testing with input 20
test('Test 5', () => {
  expect(monkeyCount(20)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
})
