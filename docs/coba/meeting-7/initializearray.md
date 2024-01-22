---
layout: doc
title: Static Array - Initialize Array

prev:
    text: Types of Array
    link: ./typesofarray

next:
    text: Access Array
    link: ./accessarray
---

# Initialize Array

::: code-group
```c [C/C++] {1,3}
// Syntax
dataType arrayName[arraySize] = {value1, value2, ...};
// Example
int numbers[5] = {1, 2, 3, 4, 5};
```
```java [Java] {1,3}
// Syntax
dataType[] arrayName = {value1, value2, value3, ...};
// Example
int[] numbers = {1, 2, 3, 4, 5};
```
:::

- __dataType:__ The type of data the array will hold (e.g., int, float, string, etc.).
- __arrayName:__ The name of the array you're declaring.
- __arraySize__ (in C/C++): The size or number of elements the array will contain.
- __{value1, value2, ...}:__ The initial values you want to assign to the array elements. This part is optional; you can declare an array without initializing it immediately.