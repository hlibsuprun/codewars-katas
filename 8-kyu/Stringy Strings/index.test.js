// Importing the function to be tested
const stringy = require('.')

// Test cases for the 'stringy' function

// Test case 1: Ensures that the generated string starts with '1'
test('Test 1', () => {
  expect(stringy(3)[0]).toBe('1')
})

// Test case 2: Tests the output for size 4
test('Test 2', () => {
  expect(stringy(4)).toBe('1010')
})

// Test case 3: Tests the output for size 6
test('Test 3', () => {
  expect(stringy(6)).toBe('101010')
})

// Test case 4:Tests the output for size 12
test('Test 4', () => {
  expect(stringy(12)).toBe('101010101010')
})
