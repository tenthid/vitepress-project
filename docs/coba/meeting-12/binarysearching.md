---
layout: doc
title: Searching - Binary Searching

prev:
    text: Linear Searching
    link: ./linearsearching

next:
    text: Meeting 13 - Introduction
    link: ../meeting-13/introduction
---

# Binary Searching
`Binary search` is an efficient algorithm used to locate a specific item in a sorted list or array. It works by repeatedly dividing the search interval in half until the desired item is found or the search interval becomes empty.  
  
`Binary search` is ideal for searching in sorted arrays or lists and is efficient for large collections where the overhead of sorting is outweighed by faster search times. It works best when the data doesn't change frequently.

::: details Advantages
1. It has a time complexity of O(log n), which means it scales well for large datasets.
2. Particularly efficient for sorted data, quickly narrowing down the search space.
:::

::: details Disadvantages
1. Needs the data to be pre-sorted, which can be time-consuming or impractical for dynamic datasets.
2. It's only efficient for sorted data and isn't suitable for unsorted or frequently changing datasets.
:::

::: info Visualization
| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 5 | 19 | 22 | 30 | 41 | 59 | 67 |

Now, we want to find number 41. How?

| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 5 | 19 | 22 | 30 | 41 | 59 | 67 |
| left |  |  | Mid |  |  | Right |

First, we need to set the __left__ and __right__ index.  
We also need to find the __mid__ using the formula: __left+(right-left)/2__  
Mid = 0+(6-0)/2 = 3. That’s why the 3rd index will be the mid.  
  
If the number of last index is odd, it will be rounded. For example: 7/2 = 3.5 -> 3  

- Now we want to find number 41.

| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 5 | 19 | 22 | 30 | 41 | 59 | 67 |
| left |  |  | Mid |  |  | Right |

- Target  = 41  
IF target > arr[mid] THEN left=mid+1  
ELSE IF target < arr[mid] THEN right = mid-1  

| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 5 | 19 | 22 | 30 | 41 | 59 | 67 |
|  |  |  |  | left | Mid | Right |

- IF target > arr[mid] THEN left=mid+1
ELSE IF target < arr[mid] THEN right = mid-1

| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 5 | 19 | 22 | 30 | 41 | 59 | 67 |
|  |  |  |  | left, Right |  |  |

- Because the left and right are in the same place, we check whether target = arr[4]
If it’s yes, then we can find that number 41 is in index 4.
:::

## Pseudocode Algorithm
```txt
BinarySearch(arr, target):
    left = 0
    right = length of arr - 1

    WHILE left <= right
        mid = left + (right - left) / 2
        IF arr[mid] = target:
            return mid
        ELSE IF arr[mid] < target
            left = mid + 1
        ELSE // IF arr[mid] > target
            right = mid - 1

    return -1  // target not found
```

## Binary Search Example

::: code-group
```c [C / C++]
int binarySearch(int arr[], int left, int right, int target) {
    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target)
            return mid;

        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return -1; // Target not found
}

int main() {
    int arr[] = { 2, 4, 6, 8, 10, 12, 14, 16 };
    int target = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = binarySearch(arr, 0, n - 1, target);

    if (result == -1)
        // print element is not found
    else
        // print element is found

    return 0;
}
```

```java [Java]
static int binarySearch(int arr[], int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target)
            return mid;
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1; // element is not found
}

public static void main(String args[]) {
    int arr[] = { 2, 4, 6, 8, 10, 12, 14, 16 };
    int target = 10;
    int result = binarySearch(arr, target);

    if (result == -1)
        // print element is not found
    else
        // print element is found in result"
}
```

```python [Python]
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  

arr = [2, 4, 6, 8, 10, 12, 14, 16]
target = 10
result = binary_search(arr, target)

if result == -1:
    print("Element is not found")
else:
    print(f"Element is found at index {result}")
```

## Exercise

::: tip What to do?
1. In a company's records, employee IDs are stored in ascending order. You've been tasked with finding the details of a new employee with ID number 5678. The employee 2.IDs are stored as follows: 1122, 2244, 3344, 4455, 5678, 6789, 7890.
2. As a financial analyst, you're examining daily stock prices sorted by timestamp. You aim to find the data related to a significant market movement at the timestamp 12:45 PM. The stock prices recorded are as follows: 9.85, 10.12, 10.45, 10.98, 11.23, 11.55, 12.01, 12.45, 13.02.
3. In an ancient temple's script, characters are arranged in ascending order, holding the secret to unlocking hidden wisdom. Your quest is to discover the index of the revered symbol 'K' within the sequence. The characters are arranged as follows: 'A', 'B', 'D', 'E', 'J', 'K', 'L', 'P', 'Z'.
4. In a library catalog sorted by titles, you're on a quest to locate the information about a specific book titled "Ancient Civilizations." The book titles are arranged as follows: "Art of War", "Bhagavad Gita", "Civil Disobedience", "Ancient Civilizations", "Gulliver's Travels".
:::