# Stringy Strings

[![Kata](https://img.shields.io/badge/Kata-Stringy%20Strings-blue)](https://www.codewars.com/kata/563b74ddd19a3ad462000054)
[![Discuss](https://img.shields.io/badge/Discuss-Stringy%20Strings-green)](https://www.codewars.com/kata/563b74ddd19a3ad462000054/discuss)
[![Solutions](https://img.shields.io/badge/Solutions-Stringy%20Strings-red)](https://www.codewars.com/kata/563b74ddd19a3ad462000054/solutions)

## Description

Write a function `stringy` that takes a size and returns a string of alternating 1s and 0s. The string should start with a 1. A string with size 6 should return: `'101010'`. With size 4 should return: `'1010'`. With size 12 should return: `'101010101010'`. The size will always be positive and will only use whole numbers.

## Problem Statement

Write a function `stringy` that generates a string of alternating 1s and 0s with a given size.

## Solution

The solution to this problem involves generating an array of alternating 1s and 0s based on the size provided, and then joining this array into a string.

```javascript
const stringy = (size) => [...new Array(size)].map((element, i) => (i % 2 === 0 ? 1 : 0)).join('')
```

## Examples

Here are some examples to illustrate how the function works:

```
size = 4    --->    '1010'

size = 6    --->    '101010'
```
