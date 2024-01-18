---
layout: doc
title: Input, Output, and String - Input and Output

prev:
    text: Introduction
    link: ../meeting-3/introduction

next:
    text: Format Output 
    link: ./outputformat
---
# Input and Output
## Input
`Input` refers to the data provided to a program or a function. It can come from various sources like the user through a keyboard, a file, a sensor, or even another program. In programming, handling input involves capturing and processing this data to perform operations or produce output.
::: code-group
```c [C]
char userInput[50];
printf("Enter a string: ");
scanf("%s", userInput);
printf("You entered: %s\n", userInput);
```
```c++ [C++]
string userInput;
cout << "Enter a string: ";
cin >> userInput;
cout << "You entered: " << userInput << endl;
```
```java [Java]
Scanner scanner = new Scanner(System.in);
System.out.print("Enter a string: ");
String userInput = scanner.nextLine();
System.out.println("You entered: " + userInput);
```
```python [Python]
user_input = input("Enter a string: ")
print("You entered: ", user_input)
```
::: 
## Output
`Output` is the result produced by a program after it processes input. It can be displayed on the screen, written to a file, sent over a network, or used as input for another process. Output can take many forms, including text, numbers, images, or any other kind of data.
::: code-group
```c [C]
char userInput[50];
printf("Hello, World!\n");
```
```c++ [C++]
string userInput;
cout << "Hello, World!" << endl;
```
```java [Java]
System.out.println("Hello, World!");
```
```python [Python]
print("Hello, World!")
```
::: 
## Pseudocode
__PRINT__ "Please enter your name: "  
__INPUT__ user_name  
__PRINT__ "Hello, " + user_name + "! Nice to meet you."  