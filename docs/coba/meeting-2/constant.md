---
layout: doc
title: Data Types and Variables - Types of Data

prev:
    text: Variables
    link: ./variables

next:
    text: Meeting 3 - Introduction
    link: ../meeting-3/introduction
---
# Constant
`Constant` is a value that remains unchanged during the execution of a program. Once defined, its value cannot be modified or reassigned throughout the program's execution. Constants are used to hold values that are expected to remain the same throughout the program's lifetime.

::: details Points
- Once a constant is defined and assigned a value, that value `cannot be altered or modified`.
- Constants are used to `represent fixed values` that are not expected to change during the execution of a program. Examples include mathematical constants (like π or e), fixed configuration parameters, or values used in algorithms that shouldn't be modified.
- In many programming languages, constants are named using `uppercase` letters with `underscores` to separate words, enhancing readability and distinguishing them from variables.
:::

## How to write constant
::: info
In `Python`, there is no strict concept of constant variables like in some other programming languages. However, it is a convention to use uppercase variable names for constants to indicate that their values should not be changed. While the language does not enforce immutability, using uppercase names for constants is a widely accepted practice among Python developers.
:::

::: code-group
```c [C]
#define PI 3.14159
#define MAX_VALUE 100
```

```c++ [C++]
const double PI = 3.14159;
const int MAX_VALUE = 100;
```

```java [Java]
final double PI = 3.14159;
final int MAX_VALUE = 100
```

```python [Python]
PI = 3.14159
MAX_VALUE = 100
```
:::

## Naming Convetions
`Naming convetions` refer to a set of rules and guidelines used for naming variables, functions, classes, and other elements within a program's codebase. These conventions aim to create consistency, readability, and maintainability in the code by establishing a standardized way to name different entities.

::: details Pascal Case
- capitalizes the first letter of each word in the identifier, including the first word, without using any separators.
- example: int `NumberOfStudents`
:::

:::  details camelCase 
- he first letter of the first word remains lowercase, and subsequent words have their first letter capitalized. No separators are used
- example:  string `fruitName`
:::

:::  details camelCase 
- words are written in lowercase and separated by underscores (_). In Python, it is common practice for developers to use snake_case when declaring variables 
- example: int `number_of_students`
:::