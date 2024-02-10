# Keep Hydrated!

[![Kata](https://img.shields.io/badge/Kata-Keep%20Hydrated!-blue)](https://www.codewars.com/kata/keep-hydrated-1)
[![Discuss](https://img.shields.io/badge/Discuss-Keep%20Hydrated!-green)](https://www.codewars.com/kata/keep-hydrated-1/discuss)
[![Solutions](https://img.shields.io/badge/Solutions-Keep%20Hydrated!-red)](https://www.codewars.com/kata/keep-hydrated-1/solutions)

## Description

This kata is designed to calculate the amount of water Nathan should drink while cycling based on the time he spends cycling. Nathan loves cycling and knows it's important to stay hydrated. He drinks 0.5 litres of water per hour of cycling. The goal of this kata is to implement a function that takes the time Nathan spends cycling in hours as input and returns the number of litres of water he will drink, rounded down to the nearest integer.

## Problem Statement

Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down to the smallest value.

## Solution

The solution to this kata involves a simple calculation. We can implement a function that multiplies the time spent cycling by the rate at which Nathan drinks water (0.5 litres per hour) and then rounds down the result to the nearest integer using the `Math.floor()` function.

```javascript
const litres = (time) => Math.floor(time * 0.5)
```

## Examples

Here are some examples to illustrate how the function works:

```
time = 3       --->    litres = 1

time = 6.7     --->    litres = 3

time = 11.8    --->    litres = 5
```
