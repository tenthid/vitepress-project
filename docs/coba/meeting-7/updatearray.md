---
layout: doc
title: Static Array - Update Array

prev:
    text: Show the Value in Array
    link: ./showarrayvalue

next:
    text: Multidimensional Array
    link: ./multiarray
---

# Update Array

## General Syntax
```txt
arrayName[index] = newValue;
```
- __arrayName:__ The name of the array.
- __index:__ The position (index) within the array where you want to update the element. Indices typically start at 0.
- __newValue:__ The new value you want to assign to the element at the specified index.

## Example
```cmd
numbers[2] = 10;
```
Updating the third element (index 2) to 10
::: info __Case__
You're working on a program that manages a student database using an array. Let’s initialize the array to store the names of 5 students and update the information of a student from the array.  
  
- __Initialization__
To initialize the array to store names of 5 students in C++, you can declare an array of strings with a size of 5, like this:
```cmd
const int numOfStudents = 5;
string studentNames[numOfStudents] = {"Alice", "Bob", "Charlie", "David", "Emily"}
```
  
- __Update__
To update the information for a specific student (let's say student at index 2), you can directly assign a new name to that index in the array:
```cmd
studentNames[2] = "Charles";
```