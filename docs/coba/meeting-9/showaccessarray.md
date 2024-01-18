---
layout: doc
title: Dynamic Array - Access or Show the Value in Array

prev:
    text: initialize Array
    link: ./initialize

next:
    text: Update Array
    link: ./updatearray
---

# Access or Show the Value in Array
## General Syntax
```txt
dataType value = arrayName[index];
```
- __dataType:__ The type of the value you're retrieving from the array.
- __value:__ The variable where the retrieved value from the array is stored.
- __arrayName:__ The name of the array you want to access.
- __index:__ The position (or index) of the element you want to access. Indices usually start from 0.

## Example (C/C++/Java)
Retrieves the value at the third position (index 2) in the array "numbers" and assigns it to the variable "value."
```cmd
int value = numbers[2];
```

