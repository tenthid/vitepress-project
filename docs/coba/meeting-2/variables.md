---
layout: doc
title: Data Types and Variables - Types of Data

next:
    text: Constant
    link: ./constant
prev:
    text: Types of Data
    link: ./typesofdata
---

# Variables
## Declare Variable
Defining the existence of the variable without necessarily assigning it a specific value. It involves specifying the variable's name and its data type.
::: info
However, it's important to note that `Python` is a dynamically typed language, meaning that you do not explicitly declare the data type of a variable. Instead, the type is inferred at runtime based on the value assigned to the variable.
:::

::: code-group
```c [c]
#include <stdio.h>

int main() {
    int myNumber;
    float myFloat;
    
return 0;
}
```
```c++ [c++]
#include <iostream>
using namespace std;

int main() {
    int myNumber;
float myFloat;

    return 0;
}
```
```java [java]
public class MyClass {
    public static void main(String[] args) {
        int myNumber;
        float myFloat;
    }
}
```
```python [python]
my_integer = 42
my_float = 3.14
my_string = "Hello, World!"
my_boolean = True
my_list = [1, 2, 3, 4, 5]
my_tuple = (10, 20, 30)
my_set = {1, 2, 3, 4, 5}
my_dict = {'key1': 'value1', 'key2': 'value2'}
```
:::

## Initialize Variable
Initializing a variable occurs when you assign an initial value to a declared variable. It's the process of giving the variable its first value after declaration. Initialization is usually done at the point of declaration or at a later stage in the program.

::: code-group
```c [c]
#include <stdio.h>

int main() {
    int myNumber;
    myNumber = 10;

    float myFloat = 3.14;

    return 0;
}
```
```c++ [c++]
#include <iostream>
using namespace std;

int main() {
    int myNumber = 10;    float myFloat = 3.14; 
    return 0;
}
```
```java [java]
public class MyClass {
    public static void main(String[] args) {
int myNumber = 10;     float myFloat = 3.14f;
    }
}
```
:::