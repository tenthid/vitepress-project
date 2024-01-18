---
layout: doc
title: Input, Output, and String - Format Output

prev:
    text: Input and Output
    link: ../meeting-3/inputoutput

next:
    text: String
    link: ./string
---
# Input and Output
`Formatting output` refers to controlling the appearance and structure of the data displayed when printing to the console or other output mediums. It allows you to present data in a specific way, adjusting the appearance of numbers, text, or other information to enhance readability or meet specific requirements.

::: code-group
```c [C]
int num = 42;
float pi = 3.14159;

printf("Integer: %d\n", num);
printf("Float: %.2f\n", pi);
```
```c++ [C++]
int num = 42;
float pi = 3.14159;
cout << "Integer: " << num << endl;
cout << fixed << setprecision(2) << "Float: " << pi << endl;
```
```java [Java]
int num = 42;
double pi = 3.14159;

System.out.printf("Integer: %d\n", num);
System.out.printf("Float: %.2f\n", pi);
```
```python [Python]
num = 42
pi = 3.14159

print(f"Integer: {num}")
print("Float: {:.2f}".format(pi))
```
:::

## Format specifier
- __%d:__ Used for integers (`int`).
- For example, printf("%d", 10); will display 10.
- __%f:__ Used for floating-point numbers (`float` or `double`).
- For example, printf("%.2f", 3.14159); will display 3.14.
- __%c:__ Used for characters (`char`).
- For example, printf("%c", 'A'); will display A.
- __%s:__ Used for strings (`char`* or std::`string` in `C++`).
- For example, printf("%s", "Hello"); will display Hello.

