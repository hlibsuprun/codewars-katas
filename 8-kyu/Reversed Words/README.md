# Reverse Words

[![Kata](https://img.shields.io/badge/Kata-Reverse%20Words-blue)](https://www.codewars.com/kata/51c8991dee245d7ddf00000e/)
[![Discuss](https://img.shields.io/badge/Discuss-Reverse%20Words-green)](https://www.codewars.com/kata/51c8991dee245d7ddf00000e/discuss)
[![Solutions](https://img.shields.io/badge/Solutions-Reverse%20Words-red)](https://www.codewars.com/kata/51c8991dee245d7ddf00000e/solutions)

## Description

This kata is designed to reverse all of the words within a string passed in. Words are separated by exactly one space, and there are no leading or trailing spaces.

## Problem Statement

Complete the solution so that it reverses all of the words within the string passed in. Words are separated by exactly one space, and there are no leading or trailing spaces.

## Solution

The solution to this kata involves splitting the string into an array of words, reversing the order of the words, and then joining them back together into a string.

```javascript
const reverseWords = (str) => str.split(' ').reverse().join(' ')
```

This code splits the input string `str` into an array of words using the `split()` method with a space as the separator, then reverses the order of the array elements using the `reverse()` method, and finally joins the elements back together into a string using the `join()` method with a space as the separator.

## Examples

Here are some examples to illustrate how the function works:

```
"hello world!"    --->    "world! hello"
```
