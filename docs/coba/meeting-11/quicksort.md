---
layout: doc
title: Sort - Quick Sort

prev:
    text: Bubble Sort
    link: ./bubblesort

next:
    text: Bubbble Sort vs Quick Sort
    link: ./bubblevsquick
---

# Quick Sort

`Quick Sort` swiftly organizes elements by picking a reference point (pivot) and rearranging items so that smaller values gather on one side and larger ones on the other. It repeats this process recursively until everything is in order. This method is super fast, especially for big lists. However, if not managed well, it can slow down in certain situations. Overall, Quick Sort is a speedy and popular way to sort things.

::: details Advantages
1. Exceptionally fast, especially on large datasets.
2. It requires minimal additional memory space due to its in-place sorting nature.
3. Performs well on various data types and is widely used in practice.
:::

::: details Disadvantages
1. Can degrade to O(n^2) if poorly implemented or with specific data patterns.
2. Doesn't always preserve the original order of equal elements in the sorted output.
:::

::: info __Visualisation__

- array = [3, 5, 1, 2, 4] 

| i | j |  |  |  | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | 5 | 1 | 2 | 4 |

- IF j < pivot THEN i+1 swap(i, j)

|  | i,j |  |  |  | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | <Badge type="tip" text="3" /> | 5 | 1 | 2 | 4 |  

- Because j and i are in the same place, then nothing changes.  
   
- Keep adding the j until j < pivot

|  | i | j |  |  | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | 5 | 1 | 2 | 4 |

|  | i |  | <Badge type="danger" text="j" /> |  | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | 5 | 1 | 2 | 4 |

- Remember, if j < pivot, then i+1 and swap(i, j)

|  |  | i | j |  | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | <Badge type="tip" text="5 (un-swap)" /> | <Badge type="tip" text="1 (un-swap)" /> | 2 | 4 |

|  |  | i | j |  | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | <Badge type="info" text="1 (swapped)" /> | <Badge type="info" text="5 (swapped)" /> | 2 | 4 |

- Keep adding the j until j < pivot

|  |  | i |  | j | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | 1 | 5 | 2 | 4 |

- if j < pivot

|  |  | i |  | <Badge type="danger" text="j" /> | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | 1 | 5 | 2 | 4 |

- then i+1 and swapp(i, j)

|  |  |  | i | j | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | 1 | <Badge type="tip" text="5 (un-swap)" /> | <Badge type="tip" text="2 un-swap" /> | 4 |

|  |  |  | i | j | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | 1 | <Badge type="info" text="2 (swapped)" /> | <Badge type="info" text="5 (swapped)" /> | 4 |

- IF j = pivot-1 THEN i+1 and swap (i, pivot)

|  |  |  |  | i,j | __pivot__ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | 1 | 2 | <Badge type="tip" text="5 (un-swap)" /> | <Badge type="tip" text="4 (un-swap)" /> |

<table>
        <thead>
            <tr>
                <th style="text-align: center;"></th>
                <th style="text-align: center;"></th>
                <th style="text-align: center;"></th>
                <th style="text-align: center;"></th>
                <th style="text-align: center;">i,j <strong>pivot</strong></th>
                <th style="text-align: center;"></th>
            </tr>
        </thead>
            <tbody>
                <tr>
                    <td style="text-align: center;"></td>
                    <td style="text-align: center;">3</td>
                    <td style="text-align: center;">1</td>
                    <td style="text-align: center;">2</td>
                    <td style="text-align: center;"><span class="VPBadge info">4 (swapped)</span></td>
                    <td style="text-align: center;"><span class="VPBadge info">5 (swapped)</span></td>
                </tr>
                <tr>
                    <td style="text-align: center;" colspan="4"><Badge type="warning" text="Left posisition of Pivot" /></td>
                    <td style="text-align: center;"></td>
                    <td style="text-align: center;"><Badge type="tip" text="Right posisition of Pivot" /></td>
                </tr>
            </tbody>
    </table>

Now that’s the end of the first iteration. Next we’ll try to see the position of the pivot. And we’ll do the same thing both for the array in the left position of pivot (4) and the right position.  
  
- <Badge type="warning" text="Left posisition" />

| i | j |  | __pivot__ |
|---|---|---|---|
|  | 3 | 1 | 2 |

- IF j < pivot, add i and swap(i, j)
ELSE j++

| i |  | <Badge type="danger" text="j" /> | __pivot__ |
|:---:|:---:|:---:|:---:|
|  | 3 | 1 | 2 |

|  | i | j | __pivot__ |
|:---:|:---:|:---:|:---:|
|  | <Badge type="tip" text="3 (un-swap)" /> | <Badge type="tip" text="1 (un-swap)" /> | 2 |

|  | i | j | __pivot__ |
|:---:|:---:|:---:|:---:|
|  | <Badge type="info" text="1 (swapped)" /> | <Badge type="info" text="3 (uswapped)" /> | 2 |

- IF j = pivot-1 THEN i+1 and swap (i, pivot)

|  |  | i, j | __pivot__ |
|:---:|:---:|:---:|:---:|
|  | 1 | <Badge type="tip" text="3 (un-swap)" /> | <Badge type="tip" text="2 (un-swap)" /> |

<table>
    <thead>
        <tr>
            <th style="text-align: center;"></th>
            <th style="text-align: center;"></th>
            <th style="text-align: center;">i, j</th>
            <th style="text-align: center;"><strong>pivot</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;"><span class="VPBadge info">2 (swapped)</span></td>
            <td style="text-align: center;"><span class="VPBadge info">3 (swapped)</span></td>
        </tr>
        <tr>
            <td style="text-align: center;" colspan="2"><Badge type="warning" text="Left posisition of Pivot" /></td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"><Badge type="tip" text="Right posisition of Pivot" /></td>
        </tr>
    </tbody>
</table>

Because the left and right side of pivot is only one number, so the iteration can be stopped.  
__THE END (for left position)__  
- For the <Badge type="tip" text="Right posisition" />, because there’s only one number, which is 5, so we don’t need to do the iteration.
  
So here’s the final result of quick sort.

<table>
    <thead>
        <tr>
            <th colspan="3" style="text-align: center;">from the second iteration</th>
            <th colspan="2" style="text-align: center;">from the first iteration</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;">1 <Badge type="warning" text="Left  position" /></td>
            <td style="text-align: center;">2 <Badge type="warning" text="Left  position" /></td>
            <td style="text-align: center;">3 <Badge type="warning" text="Left  position" /></td>
            <td style="text-align: center;">4 <Badge type="info" text="Initial pivot" /></td>
            <td style="text-align: center;">5 <Badge type="tip" text="Right  position" /></td>
        </tr>
    </tbody>
</table>
:::

Quick sort might be harder to understand, but it’s the fastest algorithm.  
  
You might wonder, `how do we pick the pivot`?

## How do we choose the pivot?

::: info There are many ways to pick the pivot:
1. Pick the first element.
2. Pick the last element.
3. Pick a random element.
4. Pick the median.
:::

- Most implementations will use the __first__ or __last__ element as the pivot, but again it depends on the situation of the array. If the array is nearly sorted, it’s better to pick random/median element, not the first or last.
- In an ideal quicksort algorithm, the __pivot__ should be the __middle-most element__. So the partition will be in equal size for more effective process

## Pseudocode

::: info Pseudocode Algorithm for Quick Sort
```txt
quickSort(arr, low, high)
    IF low < high THEN
        // Partition the array and get the pivot index
        pivotIndex = partition(arr, low, high)
        
        // Recursively sort elements before and after the pivot
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
```
:::

::: info Pseudocode Algorithm for Partition
```txt
function partition(arr, low, high)
    pivot = arr[high] // Choose the pivot (form the last element)
    smaller = low - 1  // Index of smaller element (in the previous example it’s “i”)

    FOR i FROM low TO high - 1 DO
        arr[i] <= pivot THEN // If current element is smaller than or equal to pivot
        smaller = smaller + 1 // Increment index of smaller element
        swap(arr, smaller, i) // Swap arr[smaller] and arr[i]

    swap(arr, smaller + 1, high) // Swap arr[smaller + 1] and arr[high] (pivot)
    return smaller + 1 // Return the partitioning index
```
:::

::: info Pseudocode Algorithm for Swapping
```txt
swap(arr, i, j)
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
```
:::

## Quick Sort Example

::: code-group
```c [C] {1,8,23}
// Swap function
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Partition function
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int smaller = low - 1;

    for (int i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            smaller++;
            swap(&arr[smaller], &arr[i]);
        }
    }
    swap(&arr[smaller + 1], &arr[high]);
    return (smaller + 1);
}

// Quick Sort Function
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

int main() {
    int arr[] = {12, 7, 3, 9, 2, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    quickSort(arr, 0, n - 1);

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
```
```c++ [C++] {1,8,23}
// Swap function
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

// Partition function
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int smaller = low - 1;

    for (int i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            smaller++;
            swap(arr[smaller], arr[i]);
        }
    }
    swap(arr[smaller + 1], arr[high]);
    return (smaller + 1);
}

// Quick sort function
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

int main() {
    int arr[] = {12, 7, 3, 9, 2, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    quickSort(arr, 0, n - 1);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}

```
```java [Java] {1,8,23}
// Swap function
static void swap(int arr[], int a, int b) {
    int temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// Partition function
static int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int smaller = low - 1;

    for (int i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            smaller++;
            swap(arr, smaller, i);
        }
    }
    swap(arr, smaller + 1, high);
    return (smaller + 1);
}

// Quick sort function
static void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

public static void main(String args[]) {
    int arr[] = {12, 7, 3, 9, 2, 5};
    int n = arr.length;

    quickSort(arr, 0, n - 1);
    System.out.print("Sorted array: ");
    for (int i = 0; i < n; ++i) {
        System.out.print(arr[i] + " ");
    }
}

```
```python [Python] {1,5,18}
# Swap function
def swap(arr, a, b):
    arr[a], arr[b] = arr[b], arr[a]

# Partition function
def partition(arr, low, high):
    pivot = arr[high]
    smaller = low - 1

    for i in range(low, high):
        if arr[i] <= pivot:
            smaller += 1
            swap(arr, smaller, i)

    swap(arr, smaller + 1, high)
    return smaller + 1

# Quick sort function
def quick_sort(arr, low, high):
    if low < high:
        pivot_index = partition(arr, low, high)
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)

arr = [12, 7, 3, 9, 2, 5]
n = len(arr)
quick_sort(arr, 0, n - 1)
print("Sorted array:", end=" ")
for i in range(n):
    print(arr[i], end=" ")
```
:::

## Exercise

::: tip What to do?
1. Given an array representing the ages of individuals: [35, 20, 42, 18, 28, 30]. Implement Quick Sort to arrange the ages in ascending order.
2. Consider an array with exam scores: [85, 92, 78, 96, 88, 90]. Use Quick Sort to sort the scores in ascending order.
3. You have an array representing the prices of various products: [12.99, 9.99, 5.49, 15.79, 8.29, 11.59]. Apply Quick Sort to arrange the prices in ascending order.
:::

::: warning Want more challenge?
4. Given an array representing elevations in meters: [250, 120, 400, 180, 320, 280]. Write a program using Quick Sort to arrange the elevations in __descending__ order.
:::

<!-- |  |  | i, j | __pivot__ |
|:---:|:---:|:---:|:---:|
|  | 1 | <Badge type="info" text="2 (swapped)" /> | <Badge type="info" text="3 (swapped)" /> | -->

<!-- |  |  |  |  | i,j __pivot__ |  |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  | 3 | 1 | 2 | <Badge type="info" text="4 (swapped)" /> | <Badge type="info" text="5 (swapped)" /> |
<tr>
    <td colspan="4">Left posisition of Pivot<Badge type="info" text="4 (swapped)" /> </td>
    <td></td>
    <td>right posisition of Pivot</td>
</tr> -->

<!-- <table>
    <tr>
        <td colspan="3">From teh second iteration</td>
        <td colspan="2">from the first iteration</td>
    </tr>
    <tr style="color: black">
        <td style="background-color: #fff2ccff;">bla1</td>
        <td style="background-color: #fff2ccff;">bla2</td>
        <td style="background-color: #fff2ccff;">bla2</td>
        <td style="background-color: #d9ead3ff;">bla2</td>
        <td style="background-color: #cfe2f3ff">bla2</td>
    </tr>
</table> -->