---
layout: doc
title: Repetition - While Loop

prev:
    text: Example
    link: ./example

next:
    text: Do-While Loop
    link: ./dowhileloop
---
# While Loop
A `while loop` repeatedly <u>executes a block of code as long as</u> the specified condition is true.
## Example
Creating a program that uses a while loop to print numbers from 1 to 5.
::: info Pseudocode
```txt
BEGIN
    INITIALIZE i = 1
    WHILE i <= 5:
        PRINT i
        INCREMENT i by 1
    END WHILE
END
```
:::

::: info Syntax
```txt
while (condition) {
    // Code block to be executed repeatedly
    // This code runs as long as the condition is true
}
```
:::

::: info Code Example
::: code-group
```c [C]
int i = 1; // Initialize initial value
while (i <= 5) {
    printf("%d ", i); // Print the value of i
    i++;
}
```
```c++ [C++]
int i = 1;
while (i <= 5) {
    cout << i << " ";
    i++;
}
```
```java [Java]
int i = 1;
while (i <= 5) {
    System.out.print(i + " ");
    i++;
}
```
```python [Python]
i = 1
while i <= 5:
    print(i, end=" ")
    i += 1
```
:::
