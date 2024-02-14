# Count the Monkeys!

[![Kata](https://img.shields.io/badge/Kata-Count%20the%20Monkeys!-blue)](https://www.codewars.com/kata/56f69d9f9400f508fb000ba7)
[![Discuss](https://img.shields.io/badge/Kata-Count%20the%20Monkeys!-green)](https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/discuss)
[![Solutions](https://img.shields.io/badge/Kata-Count%20the%20Monkeys!-red)](https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/solutions)

## Description

This kata is designed to help young children learn to count. You take your child to the forest to see the monkeys. You know that there are a certain number there (n), but your child is too young to just appreciate the full number. He has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

## Problem Statement

Given a positive integer n, populate an array with numbers from 1 up to and including n.

## Solution

The solution to this kata involves creating an array with the desired length using the spread syntax `[...new Array(n)]`. Then, we can use the `map()` function to iterate over each element of the array and generate the numbers from 1 to n, excluding zero.

```javascript
const monkeyCount = (n) => [...new Array(n)].map((_, i) => i + 1)
```

## Examples

Here are some examples to illustrate how the function works:

```
10    --->    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

1     --->    [1]
```
