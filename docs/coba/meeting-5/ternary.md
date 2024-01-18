---
layout: doc
title: Selection - If-else

prev:
    text: If-else
    link: ./ifelse

next:
    text: Switch Case
    link: ./switchcase
---
# Ternary
The `ternary operator` is a concise way to write conditional statements in many programming languages. It's a one-liner conditional expression that evaluates a condition and returns a value based on whether the condition is true or false.  
  
The basic structure of the ternary operator is:
condition ? value_if_true : value_if_false  
  
condition: The expression evaluated for its truth value.
value_if_true: The value returned if the condition is true.
value_if_false: The value returned if the condition is false.  
  
The ternary operator can be used as an expression to assign values or return results based on a condition.  
## Example
::: code-group
```c [C]
int a = 5, b = 8;
int max_value = (a > b) ? a : b;
printf("The maximum value is %d\n", max_value);
```
```c++ [C++]
int a = 5, b = 8;
int max_value = (a > b) ? a : b;
cout << "The maximum value is " << max_value << endl;
```
```java [Java]
int a = 5, b = 8;
int max_value = (a > b) ? a : b;
System.out.println("The maximum value is " + max_value);
```
```python [Python]
a = 5
b = 8
max_value = a if a > b else b
print("The maximum value is", max_value)
```
:::