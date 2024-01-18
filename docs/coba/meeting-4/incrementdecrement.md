---
layout: doc
title: Arithmetic Operators - Increment and Decrement

prev:
    text: Modulo
    link: ./modulo

next:
    text: Operator Precedence
    link: ./operatorprecedence
---
# Increment and Decrement
`Increment` and `decrement` are unary arithmetic operators used to increase or decrease the value of a variable __by 1__, respectively. These operators are commonly denoted as "++" and "--".

## Increment Operator
- Post-increment (a++)
- Pre-increment (++a)

## Decrement Operator
- Post-decrement (a--)
- Pre-decrement (--a)

## Example
```cmd
int x = 5;
int y = ++x;
int z = y--;
```
- The variable 'x' initially holds the value 5.
- ++x increments 'x' by 1 (x becomes 6) and assigns this updated value to 'y', so 'y' becomes 6.
- y-- uses the current value of 'y' (which is 6) in an expression, and then decrements 'y' by 1. So, 'z' becomes 6, and 'y' becomes 5.
- These operators are widely used for looping, indexing arrays, and in various algorithms to control iterations, manipulate indices, and more, due to their ability to modify values efficiently by increments or decrements.
