---
layout: doc
title: Static Array - Types of Array

prev:
    text: Example Use
    link: ./exampleuse

next:
    text: Initialize Array
    link: ./initializearray
---

# Types of Array
## Based on Dimensional

::: info One Dimensional Array
- A basic array where elements are arranged in a single row or a single column.
- Elements are accessed using a single index.
- __Example:__ int numbers[5]; creates an array capable of holding five integers.
::: 

::: info Multi Dimensional Array
- An array containing one or more arrays as its elements.
- Elements are arranged in rows and columns (two-dimensional), or in multiple dimensions (three-dimensional or higher).
- __Example:__ int matrix[3][3]; creates a two-dimensional array representing a 3x3 matrix.
:::

## Based on Size

::: info Static Array
- __Fixed Size:__ Size is determined at compile time and remains constant throughout program execution.
- __Memory Allocation:__ Occupying a fixed amount of memory, allocated on the stack, fast access but limited space.
- __Cannot Resize:__ Once declared, the size cannot be changed during runtime.
:::

::: info Dynamic Array
- __Size Flexibility:__ Size can be adjusted during runtime.
- __Memory Allocation:__ Allowing for flexibility in memory usage, allocated on the heap, more flexible but slower access.
- __Resizable__: The size can be changed as needed during program execution.
- Often used when the size of the array is not known beforehand or needs to change dynamically based on program logic.
:::