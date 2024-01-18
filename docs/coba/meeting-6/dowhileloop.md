---
layout: doc
title: Repetition - Do-While Loop

prev:
    text: While Loop
    link: ./whileloop

next:
    text: For Loop
    link: ./forloop
---
# Do-While Loop
A `do-while loop` <u>executes a block of code first</u> and then checks the condition. It guarantees the execution of the block at least once.
## Example
Create a program that asks the user for a password and continues to prompt until the correct password is entered.

::: info Pseudocode
```txt
BEGIN
    INITIALIZE password = “secure123”
    INITIALIZE input_password
    DO
        INPUT input_password
    WHILE input_password != password
        DISPLAY "Access granted!"
END
```
:::

::: info Syntax
```txt
do {
    // Code block to be executed
    // This code runs at least once
} while (condition);
```
:::

::: info Code Example
- In Python, there is no direct equivalent to the do-while loop as seen in some other languages. However, you can achieve similar functionality using a while loop
::: code-group
```c [C]
char password[] = "secure123";
char input[50];

do {
    printf("Enter the password: ");
    scanf("%s", input);
} while (strcmp(input, password) != 0);

printf("Access granted!\n");
```
```c++ [C++]
int i = 1;
string password = "secure123";
string input;

do {
    cout << "Enter the password: ";
    cin >> input;
} while (input != password);

cout << "Access granted!" << endl;
```
```java [Java]
String password = "secure123";

Scanner scanner = new Scanner(System.in);
String input;

do {
    System.out.print("Enter the password: ");
    input = scanner.nextLine();
} while(!input.equals(password));

System.out.println("Access granted!");
```
```python [Python]
password = "secure123"

while True:
    input_password = input("Enter the password: ")
    if input_password == password:
        break

print("Access granted!")
```
:::