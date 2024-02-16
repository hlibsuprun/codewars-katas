// Importing the function to be tested
const expressionMatter = require('.')

// Test cases for the 'expressionMatter' function

// Test case 1: Test for numbers 10, 5, and 6
test('Test 1', () => {
  expect(expressionMatter(10, 5, 6)).toBe(300)
})

// Test case 2: Test for numbers 2, 1, and 2
test('Test 2', () => {
  expect(expressionMatter(2, 1, 2)).toBe(6)
})

// Test case 3: Test for numbers 2, 1, and 1
test('Test 3', () => {
  expect(expressionMatter(2, 1, 1)).toBe(4)
})

// Test case 4: Test for numbers 1, 1, and 1
test('Test 4', () => {
  expect(expressionMatter(1, 1, 1)).toBe(3)
})

// Test case 5: Test for numbers 1, 2, and 3
test('Test 5', () => {
  expect(expressionMatter(1, 2, 3)).toBe(9)
})

// Test case 6: Test for numbers 1, 3, and 1
test('Test 6', () => {
  expect(expressionMatter(1, 3, 1)).toBe(5)
})

// Test case 7: Test for numbers 2, 2, and 2
test('Test 7', () => {
  expect(expressionMatter(2, 2, 2)).toBe(8)
})

// Test case 8: Test for numbers 5, 1, and 3
test('Test 8', () => {
  expect(expressionMatter(5, 1, 3)).toBe(20)
})

// Test case 9: Test for numbers 3, 5, and 7
test('Test 9', () => {
  expect(expressionMatter(3, 5, 7)).toBe(105)
})

// Test case 10: Test for numbers 5, 6, and 1
test('Test 10', () => {
  expect(expressionMatter(5, 6, 1)).toBe(35)
})

// Test case 11: Test for numbers 1, 6, and 1
test('Test 11', () => {
  expect(expressionMatter(1, 6, 1)).toBe(8)
})

// Test case 12: Test for numbers 2, 6, and 1
test('Test 12', () => {
  expect(expressionMatter(2, 6, 1)).toBe(14)
})
