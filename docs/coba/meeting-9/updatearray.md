---
layout: doc
title: Dynamic Array - Update Array

prev:
    text: Access or Show the Value in Array
    link: ./showaccessarray

next:
    text: Clear or Empty Array
    link: ./clearemptyarray
---

# Update Array

## C/C++
```c
arrayName[index] = newValue;
```
- arrayName: The name of the array.
- index: The position (index) within the array where you want to update the element. Indices typically start at 0.
- newValue: The new value you want to assign to the element at the specified index.

::: info Example
Updating the third element (index 2) to 10
```c
numbers[2] = 10;
```
:::
 
## Java
```java
arrayName.set(indexToUpdate, newValue);
```
- arrayName: The name of the array.
- index: The position (index) within the array where you want to update the element. Indices typically start at 0.
- newValue: The new value you want to assign to the element at the specified index.

::: info Example
Updating the third element (index 2) to 10
```java
numbers.set(2, 10);
```
:::
 
## Python
```python
array_name[index] = new_value
```
::: info Example
```python
array_name[2] = 9
array_name[4] = 10
```
In this example, the elements at __index 2__ and __index 4__ are updated to new values (9 and 10, respectively). After the update, the array_name will reflect the changes.
:::
 