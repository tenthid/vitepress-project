---
layout: doc
title: Repetition - Forever Loop

prev:
    text: for Loop
    link: ./forloop

next:
    text: Continue and Break
    link: ./continuebreak
---
# Forever Loop
A `forever loop` is a loop that runs indefinitely, continuously executing the block of code unless explicitly interrupted or stopped.
::: code-group
```c [C]
while (1) {
    printf("This is an infinite loop in C\n");
}
```
```c++ [C++]
while (true) {
    cout << "This is an infinite loop in C++" << endl;
}
```
```java [Java]
while (true) {
    System.out.println("This is an infinite loop in Java");
}
```
```python [Python]
while True:
    print("This is an infinite loop in Python")
```
:::