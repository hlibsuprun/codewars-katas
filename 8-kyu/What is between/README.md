# What is between?

[![Kata](https://img.shields.io/badge/Kata-What%20is%20between%3F-blue)](https://www.codewars.com/kata/55ecd718f46fba02e5000029/)
[![Discuss](https://img.shields.io/badge/Discuss-What%20is%20between%3F-green)](https://www.codewars.com/kata/55ecd718f46fba02e5000029/discuss)
[![Solutions](https://img.shields.io/badge/Solutions-What%20is%20between%3F-red)](https://www.codewars.com/kata/55ecd718f46fba02e5000029/solutions)

## Description

This kata requires you to complete a function that takes two integers `(a, b)`, where `a < b`, and returns an array containing all integers between the input parameters, including them.

## Problem Statement

You need to implement a function called `between` that takes two integers `a` and `b` as input parameters. The function should return an array containing all integers between `a` and `b`, inclusive.

## Solution

The solution to this task involves creating an array of integers from `a` to `b`, inclusive. We can achieve this by using the `Array.from()` method to create an array with a specified length, where the length is equal to `b - a + 1`, and then filling it with integers starting from `a` up to `b`. We can accomplish this using the following code:

```javascript
const between = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i)
```

## Examples

Here are some examples to illustrate how the function works:

```
a = 1, b = 4     --->    [1, 2, 3, 4]

a = -2, b = 2    --->    [-2, -1, 0, 1, 2]
```
