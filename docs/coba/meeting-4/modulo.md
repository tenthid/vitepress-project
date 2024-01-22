---
layout: doc
title: Arithmetic Operators - Modulo

prev:
    text: Multiplication and Division
    link: ./multifydivide

next:
    text: Increment and Decrement
    link: ./incrementdecrement
---
# Modulo
- __Modulo__ operation finds the remainder when one number is divided by another
::: code-group
```c [C]
int a = 5, b = 3, result;
result = a % b;
```
```c++ [C++]
int a = 5, b = 3, result;
result = a % b;
```
```java [Java]
int a = 5, b = 3, result;
result = a % b;
```
```python [Python]
a, b = 5, 3
result = a % b
```
:::

## Example
Mr. Ali sells __153 cakes__. He wants to pack these cakes into bundles of __8 cakes per bundle__. How many cakes will remain unpacked?

::: info Pseudocode
```txt 
BEGIN
    INITIALIZE totalCakes as 153
    INITIALIZE cakesPerBundle as 8

    COMPUTE remainingCakes = totalCakes % cakesPerBundle

    DISPLAY "Number of cakes remaining unpacked: ", remainingCakes
END
```
:::

::: code-group
```c [C]
int totalCakes = 153;
int cakesPerBundle = 8;
int remainingCakes = totalCakes % cakesPerBundle;

printf("Number of cakes remaining unpacked: %d\n", remainingCakes);
```
```c++ [C++]
int totalCakes = 153;
int cakesPerBundle = 8;
int remainingCakes = totalCakes % cakesPerBundle;

cout << "Number of cakes remaining unpacked: " << remainingCakes << endl;
```
```java [Java]
int totalCakes = 153;
int cakesPerBundle = 8;
int remainingCakes = totalCakes % cakesPerBundle;

System.out.println("Number of cakes remaining unpacked: " + remainingCakes);
```
```python [Python]
total_cakes = 153
cakes_per_bundle = 8
remaining_cakes = total_cakes % cakes_per_bundle

print("Number of cakes remaining unpacked: {}".format(remaining_cakes))
```
:::