---
layout: doc
title: Function - Defining Function

prev:
    text: User-defined Function
    link: ./userdefinedfunction

next:
    text: Local vs Global Variables in Function
    link: ./localglobalvariable
---

# Defining Function

## With Return

::: code-group
```cmd [C/C++/Java]
int add() {
	int a = 20;
	int b = 40;
    int c = a + b
    return c;
}
```
```python [Python]
def add():
    a = 20
    b = 40
    c = a + b
    return c
```
:::
- __return_type:__ The data type of the value the function will return (e.g., int, float, void for no return).
- __function_name:__ The name of the function.
- __parameters:__ The input variables or arguments passed to the function (optional). 

## Without Return

::: code-group
```cmd [C/C++/Java]
void greeting() {
    printf("Hi there!\n");
}
```
```python [Python]
def greeting():
    print("Hi there!")
```
:::
- Without return means when the function is called, it __won’t return any value__. Instead, it will only execute the commands inside. For example: printing a sentence.

## Example
::: info Without Parameter
::: code-group
```cmd [C / C++ / Java] {2,5,8}
void greet() {
	// in C
    printf("Hello, welcome!\n");

	// in C++
    std::cout << "Hello, welcome!" << std::endl;

    // in Java
    System.out.println("Hello, welcome!");
}

int main() {
    // Calling the function
    greet(); // Function call
    return 0;
}
```
```python [Python]
def greet():
    print("Hello, welcome!")
greet()

```
__Output:__ 
   
"Hello, welcome"  
  
__Note:__
- In `C` and `C++`, the functions need to be defined b__efore the main function__.
- In `Java`, it's __not necessary__ to define the functions before the main function.
- Since `Python` is an __interpreted language__, there's no need for a separate main() function. The script is executed sequentially, and code outside functions is executed when the script is run. Therefore, the greet() function is called __directly__.
:::

::: info With Parameter
::: code-group
```cmd [C / C++ / Java]
int addNumbers(int a, int b) {
    int sum = a + b;
    return sum;
}

int main() {
    int num1 = 5;
    int num2 = 3;
    int result = addNumbers(num1, num2);

    printf("The sum of %d and %d is: %d\n", num1, num2, result);
    return 0;
}
```
```python [Python]
def add_numbers(a, b):
    sum = a + b
    return sum

num1 = 5
num2 = 3
result = add_numbers(num1, num2)

print(f"The sum of {num1} and {num2} is: {result}")
```
__Output:__  
  
“The sum of 5 and 3 is: 8” 
   
__Note:__
- In `Python`, the script is executed sequentially, and code outside functions is run when the script is executed. Therefore, you can directly call the function without encapsulating the logic within a specific main function.  
  
__Challenge:__
- try to print the sum variable inside the main function, can you see the output? <Badge type="tip" text="C / C++ / Java" />
- try to print the sum variable outside of the add_numbers() function, can you see the output ? <Badge type="tip" text="Python" />
:::