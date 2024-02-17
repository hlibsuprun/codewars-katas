# Expressions Matter

[![Kata](https://img.shields.io/badge/Kata-Expressions%20Matter-blue)](https://www.codewars.com/kata/expressions-matter)
[![Discuss](https://img.shields.io/badge/Discuss-Expressions%20Matter-green)](https://www.codewars.com/kata/expressions-matter/discuss)
[![Solutions](https://img.shields.io/badge/Solutions-Expressions%20Matter-red)](https://www.codewars.com/kata/expressions-matter/solutions)

## Description

Given three integers `a`, `b`, `c`, return the largest number obtained after inserting the following operators and brackets: +, *, (). In other words, try every combination of `a`, `b`, `c` with `[*+()]`, and return the Maximum Obtained. The numbers are always positive. The numbers are in the range `(1  ≤  a, b, c  ≤  10)`. You can use the same operation more than once. It's not necessary to place all the signs and brackets. Repetition in numbers may occur. You cannot swap the operands. For instance, in the given example you cannot get expression `(1 + 3) * 2 = 8`.

## Problem Statement

Given three integers `a`, `b`, `c`, you need to return the largest number obtained after trying every combination of `a`, `b`, `c` with `[*+()]`.

## Solution

The solution to this kata involves trying every combination of the given integers with the operators +, *, (). We can implement a function that returns the maximum result among all these combinations.

```javascript
const expressionMatter = (a, b, c) => Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))
```

## Examples

Here are some examples to illustrate how the function works:

```
1, 2, 3    --->    9

1, 1, 1    --->    3

9, 1, 1    --->    18
```
