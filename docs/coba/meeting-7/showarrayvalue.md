---
layout: doc
title: Static Array - Show the Value in Array

prev:
    text: Access Array
    link: ./accessarray

next:
    text: Update Array
    link: ./updatearray
---

# Show the Value in Array
`To show or display the values` stored in an array, you can typically use a loop to iterate through the array and print each element.

::: details __C/C++__
```c {5,8}
int arr[] = {1, 2, 3, 4, 5};
int size = sizeof(arr) / sizeof(arr[0]);

for (int i = 0; i < size; ++i) {
    // using c
    printf("Element at index %d: %d\n", i, arr[i]);

    // using c++
    cout << "Element at index " << i << ": " << arr[i] << endl;

}
```
- __sizeof(arr)__ returns the total size (in bytes) occupied by the array arr.
- __sizeof(arr[0])__ returns the size (in bytes) of the first element of the array arr.
  
By dividing the total size of the array arr by the size of its first element (arr[0]), it calculates the number of elements in the array. This method is used to determine the size of the array regardless of the number of elements explicitly defined during initialization.
:::

::: details __Java__
```java
int[] arr = {1, 2, 3, 4, 5};

for (int i = 0; i < arr.length; ++i) {
    System.out.println("Element at index " + i + ": " + arr[i]);
}
```
  
In Java, arrays have a property called .`length` that directly provides the size or length of the array. This property simplifies the process of determining the number of elements in an array compared to languages like C or C++, where you'd need to calculate the size using methods like `sizeof`.
:::

::: details __Python__
```Python
arr = [1, 2, 3, 4, 5]

for i in range(len(arr)):
    print("Element at index {}: {}".format(i, arr[i]))
```
- __sizeof(arr)__ returns the total size (in bytes) occupied by the array arr.
- __sizeof(arr[0])__ returns the size (in bytes) of the first element of the array arr.
  
In Python, we use a `list` (arr) instead of an array. The range(len(arr)) generates a sequence of indices corresponding to the `length of the list`, and the for loop iterates over these indices.
  
- `len` is a built-in function that returns the length (number of elements) of an object, such as a string, list, or tuple.
:::