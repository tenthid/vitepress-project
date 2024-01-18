---
layout: doc
title: Dynamic Array - Initialize Array

prev:
    text: Introduction
    link: ./introduction

next:
    text: Accesss and Show the Value in Array
    link: ./showaccessarray
---

# Initialize Array
## C
```c{1,7}
// Syntax
dataType *arrayName = (dataType *)malloc(size * sizeof(dataType));
for (int i = 0; i < size; ++i) {
    arrayName[i] = newValue;
}

// Example
int *numbers = (int *)malloc(size * sizeof(int));
for (int i = 0; i < size; ++i) {
    umbers[i] = i * 2;
}
```
- __malloc(size * sizeof(dataType))__: malloc is a function in C that allocates a block of memory of size. __size * sizeof(dataType)__ bytes, where size is the number of elements in the array, and __sizeof(dataType)__ gives the size of each element in bytes.

## C++
```c++{1,5}
// Syntax
std::vector<int> arrayName;
arrayName.push_back(newValue);

// Example
std::vector<int> numbers;
numbers.push_back(3);
```
- __std::vector&lt;int&gt;__ arrayName; initializes an empty dynamic array of integers.
- __push_back()__ is a member function of the std::vector container in C++. It's used to add an element to the end of the vector.

## Java
```java{1,5}
// Syntax
ArrayList<dataType> arrayListName = new ArrayList<>();
arrayListName.add(newValue);

// Example
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(3);
```
- __.add()__ is a method of the ArrayList class in Java. It's used to append an element with the specified value to the end of the ArrayList.

## Python
```python{1,6}
# Syntax
from array import array
integer_array = array('Datatype', [values])
integer_array.append(new_value)

# Example
from array import array
integer_array = array('i', [1, 2, 3, 4, 5])
integer_array.append(3)
```
In Python, the primary way to create an array-like structure is to use a list. If you specifically need to use an array, you can use the array module in Python.  
  
- 'i' is the typecode for signed integers.
- The second argument to array is the iterable used to initialize the array.
- The append method is used to add elements in the last index
