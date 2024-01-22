---
layout: doc
title: Dynamic Array - Clear or Empty Array

prev:
    text: Update Array
    link: ./updatearray

next:
    text: Example
    link: ./example
---

# Clear or Empty Array
## C

::: info Syntax
```c
free(arrayName);
```
:::

- __free()__ is the function to deallocate the memory allocated for a dynamically allocated array using malloc() or calloc(). It releases the memory to prevent memory leaks
 
## C++

::: info Syntax
```c++
delete[] arrayName;
```
:::

- __delete[]__ ensures that memory is properly deallocated, preventing memory leaks for arrays allocated with new[].
 
## Java

::: info Syntax
```java
arrayName.clear();
```
:::

- __clear()__ method removes all elements from the ArrayList, allowing the garbage collector to reclaim memory associated with those elements.
 
## Python

::: info Syntax
```python
array_name.clear()
```
:::

- __clear()__ is a method that is more straightforward for clearing the elements of a dynamic array-like structure in Python.
 