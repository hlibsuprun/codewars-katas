# Get the mean of an array

[![Kata](https://img.shields.io/badge/Kata-Get%20the%20mean%20of%20an%20array-blue)](https://www.codewars.com/kata/563e320cee5dddcf77000158)
[![Discuss](https://img.shields.io/badge/Discuss-Get%20the%20mean%20of%20an%20array-green)](https://www.codewars.com/kata/563e320cee5dddcf77000158/discuss)
[![Solutions](https://img.shields.io/badge/Solutions-Get%20the%20mean%20of%20an%20array-red)](https://www.codewars.com/kata/563e320cee5dddcf77000158/solutions)

## Description

At the end of the academic year, it's a crucial moment for school reports. Averages need to be calculated, and all the students come to you, entreating you to calculate their average for them. It's easy! You just need to write a script that returns the average of the given array, rounded down to its nearest integer.

## Problem Statement

You're given an array of marks. Your task is to calculate the average of these marks and return it rounded down to the nearest integer.

## Solution

To solve this problem, we can create a function that takes an array of marks as input. Inside the function, we calculate the sum of all marks using the `reduce` method. Then, we divide this sum by the number of marks in the array to get the average. Finally, we use the double tilde (`~~`) operator to round down the average to the nearest integer.

```javascript
const getAverage = (marks) => ~~(marks.reduce((total, value) => total + value, 0) / marks.length)
```

## Examples

Here are some examples to illustrate how the function works:

```
2, 2, 2, 2       --->    2

1, 2, 3, 4, 5    --->    3
```
