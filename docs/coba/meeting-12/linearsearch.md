---
layout: doc
title: Searching - Linear Searching

prev:
    text: Examples of Searching
    link: ./examples

next:
    text: Binary Searching
    link: ./binarysearching
---

# Linear Searching
`Linear search` is a straightforward searching algorithm used to find a target value within a list or an array by sequentially checking each element until the desired element is found or the entire list is traversed.  
  
`Linear search` is suitable for relatively small datasets where efficiency is not a critical concern. It doesn't require the data to be sorted, making it applicable for unorganized collections.

::: details Advantages
1. It's easy to implement and understand, involving a basic iterative approach to check each element.
2. Works well for small collections or when the location of the target is unknown.
:::

::: details Disadvantages
1. Its time complexity is O(n), where 'n' is the number of elements. This makes it inefficient for large datasets as the search time increases linearly with the size of the dataset.
2. In situations where data is sorted, other algorithms like binary search offer significantly better performance.
:::

::: info Visualization
| 0 | 1 | 2 | 3 | 4 |
|:---:|:---:|:---:|:---:|:---:|
| 5 | 23 | 65 | 1 | 42 |

We want to search for number 65. How?
- We’ll try to find it one-by-one from the first index, which is [0].
- We can use the loop concept!
- Loop the array, IF i = target, THEN return i

Target = 65;  
  
Is [0] = target? ❌  
Is [1] = target? ❌  
Is [2] = target? ✅  
So we know that the number that we’re looking for is __in index [2]__.

## Pseudocode
```txt
LinearSearch(arr, target):
    FOREACH element in arr DO
        IF element equals target then
            RETURN index of element
        ELSE
            RETURN -1 // Element not found
		END IF
	END FOREACH
```
__Simple right?__

## Linear Search Example

::: code-group
```c [C / C++]
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i; // Return index if target found
        }
    }
    return -1; // Return -1 if target not found
}

int main() {
    int arr[] = {2, 5, 9, 4, 7, 3};
    int target = 7;
    int n = sizeof(arr) / sizeof(arr[0]); // to find the size of the array

    int result = linearSearch(arr, n, target); // search number ‘7’ in the array

    if (result != -1) {
        //print result
    } else {
        //print element not found
    }

    return 0;
}
```

```java [Java]
public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) { // .length to know the size of the array
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

public static void main(String[] args) {
    int[] arr = {2, 5, 9, 4, 7, 3};
    int target = 7;

    int result = linearSearch(arr, target); // search number ‘7 in the array

    if (result != -1) {
        System.out.println("Element found at index " + result);
    } else {
        System.out.println("Element not found");
    }
}

```

```python [Python]
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

arr = [2, 5, 9, 4, 7, 3]
target = 7

result = linear_search(arr, target)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")
```
:::

## Exercise
::: tip What to do?
1. __Searching Integers__  
Given the array of integers: [5, 12, 3, 8, 9, 4, 10], perform a Linear Search to find the index of the number 8.

2. __Searching Floats__  
Perform a Linear Search in the array of floating-point numbers [2.5, 3.6, 1.8, 7.2, 4.3, 5.1] to determine the index of the float value 7.2.

3. __Searching Strings__  
Using a Linear Search, find the position of the word "apple" in the array of strings ["orange", "banana", "apple", "grape", "melon"].

4. __Searching Characters__  
In the array of characters ['a', 'b', 'c', 'd', 'e'], utilize a Linear Search to identify the index of the character 'c'.


