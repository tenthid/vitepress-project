---
layout: doc
title: Arithmetic Operators - Addition and Subtraction

prev:
    text: Introduction
    link: ./introduction

next:
    text: Multiplictation and Subtraction
    link: ../meeting-4/multifydivide
---
# Addition and Subtraction
## Addition
- Addition combines two or more numbers to find their total sum.
::: code-group
```c [C]
int a = 5, b = 3, result;
result = a + b;
```
```c++ [C++]
int a = 5, b = 3, result;
result = a + b;
```
```java [Java]
int a = 5, b = 3, result;
result = a + b;
```
```python [Python]
a, b = 5, 3
result = a + b
```
:::

## Subtraction
- Subtraction finds the difference between two numbers.
::: code-group
```c [C]
int a = 5, b = 3, result;
result = a - b;
```
```c++ [C++]
int a = 5, b = 3, result;
result = a - b;
```
```java [Java]
int a = 5, b = 3, result;
result = a - b;
```
```python [Python]
a, b = 5, 3
result = a - b
```
:::

## Example
Emma planning her monthly expenses. She started with a budget of __$2000__ for the month. Throughout the month, she made purchases and received her paycheck. She bought a laptop for __$800__, went out for dinner costing __$50__, and received her paycheck of __$1500__. She also paid her monthly rent of __$700__.

::: info Pseudocode
```txt 
BEGIN
    INITIALIZE budget = 2000
    SUBTRACT budget = budget - 800
    SUBTRACT budget = budget - 50
    ADD budget = budget + 1500
    SUBTRACT budget = budget - 700
    OUTPUT "Final budget is: ", budget
END
```
:::

::: code-group
```c [C]
int budget = 2000;
budget -= 800;

budget -= 50;
budget += 1500;

budget -= 700;

printf("Final budget is: $%d\n", budget);

return 0;
```
```c++ [C++]
int budget = 2000;
budget -= 800;

budget -= 50;
budget += 1500;

budget -= 700;

cout << "Final budget is: $" << budget << endl;
return 0;
```
```java [Java]
int budget = 2000;
budget -= 800;

budget -= 50;
budget += 1500;

budget -= 700;

System.out.println("Final budget is: $" + budget);
```
```python [Python]
budget = 2000
budget -= 800

budget -= 50
budget += 1500

budget -= 700

print("Final budget is: $" + str(budget))
```
:::