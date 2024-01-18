---
layout: doc
title: Static Array - Multidimensional Array

prev:
    text: UPdate Array
    link: ./updatearray

next:
    text: Exercise
    link: ./exercise
---

# Multidimensional Array
::: info 
- To access or update a value, this is how we call the index:
arrayName[rowIndex][columnIndex]
- For example:
numbers[1][3] = 0
Can you guess which number will be replaced?
:::
## C/C++
```c {1,8}
//syntax
dataType arrayName[rowSize][columnSize] = {
    {value1, value2, ...},
    {value3, value4, ...},
    {value5, value6, ...}
};

//example
int numbers[3][4] = {
    {1, 2, 3, 4},
    {14, 23, 31, 42},
    {11, 24, 37, 40}
};
```

## Java
```java {1,8}
//Syntax
dataType[][] arrayName = {
{value1, value2, ...},
{value3, value4, ...},
{value5, value6, ...}
};

//example
int[][] numbers = {
{1, 2, 3, 4},
{14, 23, 31, 42},
{11, 24, 37, 40}
};
```

## Python
```python
numbers = [
    [1, 2, 3, 4],
    [14, 23, 31, 42],
    [11, 24, 37, 40]
]
```
In Python, you can use a list of lists to represent a multidimensional array. To access the elements :

```python
print(numbers[0][2])
print(numbers[1][1])
print(numbers[2][3])
```

## Show the Value in Multidimensional Array
To `show or display the values` stored in a multidimensional array, you can typically use a `nested loop` to iterate through the array and print each element.
::: code-group
```C [C/C++]
for (int i = 0; i < rowSize; i++) {
    for (int j = 0; j < columnSize; j++) {
        printf("%d ", arrayName[i][j]);
    }
    printf("\n");
}
```
```java [Java]
for (int i = 0; i < rowSize; i++) {
    for (int j = 0; j < columnSize; j++) {
        System.out.print(arrayName[i][j] + " ");
    }
    System.out.println();
}
```
```python [Python]
for i in range(len(array_name)):
    for j in range(len(array_name[i])):
        print(array_name[i][j], end=" ")
    print()
```