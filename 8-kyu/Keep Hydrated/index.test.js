// Importing the function to be tested
const litres = require('.')

// Test cases for the 'litres' function

// Test case 1: When input is 2, expected output is 1
test('Test 1', () => {
  expect(litres(2)).toBe(1)
})

// Test case 2: When input is 1.4, expected output is 0
test('Test 2', () => {
  expect(litres(1.4)).toBe(0)
})

// Test case 3: When input is 12.3, expected output is 6
test('Test 3', () => {
  expect(litres(12.3)).toBe(6)
})

// Test case 4: When input is 0.82, expected output is 0
test('Test 4', () => {
  expect(litres(0.82)).toBe(0)
})

// Test case 5: When input is 11.8, expected output is 5
test('Test 5', () => {
  expect(litres(11.8)).toBe(5)
})

// Test case 6: When input is 1787, expected output is 893
test('Test 6', () => {
  expect(litres(1787)).toBe(893)
})

// Test case 7: When input is 0, expected output is 0
test('Test 7', () => {
  expect(litres(0)).toBe(0)
})
