---
layout: doc
title: Repetition - For Loop

prev:
    text: Do-While Loop
    link: ./dowhileloop

next:
    text: Forever Loop
    link: ./foreverloop
---
# For Loop
A `for loop` is used for iterating over a sequence of values or executing a block of code a specified number of times.
## Example
Create a program that prints even numbers from 2 to 10 in descending order.

::: info Pseudocode
```txt
BEGIN
    SET starting_value to 10
    SET ending_value to 2
    FOR i FROM starting_value down to ending value with a step of 2:
        DISPLAY i
END
```
:::

::: info Syntax
```txt
for (startValue; condition; step) {
    // Code block to be executed
    // This code runs repeatedly as long as the condition is true
}
```
__Explanation__:  
- startValue: It initializes the loop control variable or sets up any initial conditions. It usually involves declaring and initializing a variable that controls the loop. Example: i=1;  
- condition: It's a condition or expression evaluated before each iteration of the loop. If the condition is true, the loop continues; if false, the loop terminates. Example: i<5;  
- step: It modifies the loop control variable and is executed after each iteration of the loop. Example: i++;
:::

::: info Code Example
::: code-group
```c [C]
for (int i = 10; i >= 2; i -= 2) {
    printf("%d ", i);
}
```
```c++ [C++]
for (int i = 10; i >= 2; i -= 2) {
    cout << i << " ";
}
```
```java [Java]
for (int i = 10; i >= 2; i -= 2) {
    System.out.print(i + " ");
}
```
```python [Python]
for i in range(10, 1, -2):
    print(i, end=" ")
```
:::