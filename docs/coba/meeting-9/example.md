---
layout: doc
title: Dynamic Array - Example

prev:
    text: Clear or Empty Array
    link: ./clearemptyarray

next:
    text: Exercise
    link: ./exercise
---

# Example
::: info __Case__
You're tasked to create a program that manages a dynamic array of integers for a small company. Develop a system in `C`, `C++`, and `Java` to store up to 5 integer values in a dynamic array. Illustrate the initialization of data, update one element within the array, then show the whole elements.
:::

::: code-group
```c
int *data = (int *)malloc(5 * sizeof(int));
for (int i = 0; i < size; ++i) {
    data[i] = i * 10; //initialize elements
}

data[2] = 25; //update an element

printf("Array Values:\n");
for (int i = 0; i < size; ++i) {
    printf("%d ", data[i]); //show elements
}
```
```c++
std::vector<int> data(5);
for (int i = 0; i < 5; ++i) {
    data.push_back(i * 10); //initialize elements
}

data[2] = 25; //update an element

std::cout << "Vector Values:" << std::endl;
for (int val : data) {
    std::cout << val << " "; //show elements
}
```
```java
ArrayList<Integer> data = new ArrayList<>();

for (int i = 0; i < 5; ++i) {
    data.add(i * 10); //initialize elements
}

data.set(2, 25); //update an element

System.out.println("ArrayList Values:");
for (int val : data) {
    System.out.print(val + " "); //show elements
}
```
```python
from array import array

data = array('i')
for i in range(5):
    data.append(i * 10)

data[2] = 25
print("Array Values:")
for val in data:
    print(val, end=" ")
```