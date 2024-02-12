// Importing the function to be tested
const reverseWords = require('.')

// Test cases for the 'reverseWords' function

// Test case 1: Reverses words in a simple string
test('Test 1', () => {
  expect(reverseWords('hello world!')).toBe('world! hello')
})

// Test case 2: Reverses words in a sentence with different word lengths
test('Test 2', () => {
  expect(reverseWords("yoda doesn't speak like this")).toBe("this like speak doesn't yoda")
})

// Test case 3: Handles a single word string
test('Test 3', () => {
  expect(reverseWords('foobar')).toBe('foobar')
})

// Test case 4: Reverses words in a sentence with two words
test('Test 4', () => {
  expect(reverseWords('kata editor')).toBe('editor kata')
})

// Test case 5: Reverses words in a sentence with repeated words
test('Test 5', () => {
  expect(reverseWords('row row row your boat')).toBe('boat your row row row')
})

// Test case 6: Handles an empty string
test('Test 6', () => {
  expect(reverseWords('')).toBe('')
})
